import { getMissionbyId, sendMission } from "$lib/db/mission.js";
import { getFriends } from "$lib/db/friend.js";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const userId = event.locals.user.id

    try {
        // 내가만든미션 가져오기
        const result = await getMissionbyId(userId);
        console.log("내가만든미션 가져오기 실행(rowCount): ", result.rowCount);

        // 친구조회
        const friendsData = await getFriends(userId);
        const friends = [];
        friendsData.forEach(value => {
            if (value.status) {
                friends.push(userId !== value.userId ? value.userId : value.friendId);
            }
        })

        return { mission: result.rows, friends };
    } catch (error) {
        console.error('내가만든미션 가져오기 오류 : ', error);
        throw error;
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    // 미션 보내기
    sendMission: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());
        console.log(formData)
        try {
            
        } catch (error) {
            
        }
    }
}