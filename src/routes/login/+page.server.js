import { hashPassword, checkPassword } from "$lib/utils.js";
import { insertUser, getUserbyId } from "$lib/db/user.js";

/** @type {import ('./$types').Actions} */
export const actions = {
    signin: async (event) => {
        // User input data
        const formData = await event.request.formData();
        const id = formData.get("id");
        const password = formData.get("password");

        try {
            const user = await getUserbyId(id);
            if (!user) {
                return { status: 404, message: "사용자를 찾을 수 없습니다" }
            }

            const hashPassword = user.password;
            const checkResult = await checkPassword(password, hashPassword);

            if (checkResult) {
                event.locals.user = user;
                console.log("locals.user",event.locals.user)
                event.cookies.set("session", user.id, {
                    httpOnly: true,
                    sameSite: "lax",
                    path: "/"
                })
                console.log("Login user : ", user);
                return { status: 200, message: "로그인 성공" };
            }

            return { status: 401, message: "승인되지 않음 - 잘못된 비밀번호" }
        } catch (error) {
            console.error('Error in createmission server:', error)
        }
    },
    signup: async (event) => {
        // User input data
        const formData = await event.request.formData();
        const id = formData.get("id");
        const password = await hashPassword(formData.get("password"));

        try {
            // Duplicate check
            const user = await getUserbyId(id);
            if (user) {
                return { status: 409, message: "이미 가입된 아이디입니다" }
            }

            // Signup
            const newUser = await insertUser(id, password);
            console.log('New user:', newUser);
            return { status: 201, message: "회원가입이 완료되었습니다" }
        } catch (error) {
            console.error('Error inserting user:', error);
            throw error;
        }
    }
}