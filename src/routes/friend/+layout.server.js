import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
    // 비회원 보내기
    if (!event.locals.user.isLogin) {
        return redirect(307, "/");
    }
}