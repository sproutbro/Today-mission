import { redirect } from '@sveltejs/kit'
import { getUserbyId } from '$lib/db/user';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    // 비회원 보내기
    if (!event.locals.user.isLogin) {
        return redirect(307, "/");
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    // 친구찾기 요청
    default: async (event) => {
        const formData = await event.request.formData();
        const freindUserId = formData.get("friendUserId");
        try {
            const userId = await getUserbyId(freindUserId);
            if (!userId) {
                return { message: "없는 사용자 입니다" };
            } else {
                return { user: userId.id };
            }
        } catch (error) {
            console.error("친구 찾기 오류 : ", error)
        }
    }
}