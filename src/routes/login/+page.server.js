import { hashPassword, checkPassword } from "$lib/utils.js";
import { insertUser, getUserbyId } from "$lib/db/user.js";
import { createToken } from "$lib/auth";

/** @type {import ('./$types').Actions} */
export const actions = {
    signin: async (event) => {
        // 사용자 입력자료
        const formData = await event.request.formData();
        const id = formData.get("id");
        const password = formData.get("password");

        try {
            // 유저검색
            const user = await getUserbyId(id);
            if (!user) {
                return { status: 404, message: "사용자를 찾을 수 없습니다" }
            }

            // 비번체크
            const checkResult = await checkPassword(password, user.password);

            //로그인
            if (checkResult) {
                const { jwtToken, option } = createToken(user.id);
                event.cookies.set("jwtToken", jwtToken, option);
                return { status: 200, message: "로그인 성공" };
            }

            return { status: 401, message: "승인되지 않음 - 잘못된 비밀번호" }
        } catch (error) {
            console.error('로그인 에러:', error)
        }
    },
    signup: async (event) => {
        // 사용자 입력자료
        const formData = await event.request.formData();
        const id = formData.get("id");
        const password = await hashPassword(formData.get("password"));

        try {
            // 중복확인
            const user = await getUserbyId(id);
            if (user) {
                return { status: 409, message: "이미 가입된 아이디입니다" }
            }

            // 회원가입
            const newUser = await insertUser(id, password);
            console.log('New user:', newUser);
            return { status: 201, message: "회원가입이 완료되었습니다" }
        } catch (error) {
            console.error('사용자가입 오류 : ', error);
            throw error;
        }
    }
}