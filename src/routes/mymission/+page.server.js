import { getMissionbyId } from "$lib/db/mission.js";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const userId = event.locals.user.id

    // 내가만든미션 가져오기
    try {
        const result = await getMissionbyId(userId);
        console.log("내가만든미션 가져오기 실행(rowCount): ", result.rowCount);
        return { mission: result.rows };
    } catch (error) {
        console.error('내가만든미션 가져오기 오류 : ', error);
        throw error;
    }
}