import { getUserbyId } from '$lib/db/user.js';
import { addFriend } from '$lib/db/friend.js';

/** @type {import('./$types').Actions} */
export const actions = {
    // 친구찾기
    findFriend: async (event) => {
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
    },
    // 친구신청
    addFriend: async (event) => {
        const userId = event.locals.user.id;
        const formData = await event.request.formData();
        const findUser = formData.get("findUser");

        try {
            const newAddFriend = await addFriend(userId, findUser);
            console.log("친구신청 : ", newAddFriend)
            let message = "친구 신청이 완료되었습니다";
            if (newAddFriend === 210) {
                message = "중복된 요청입니다";
            }
            return { message };
        } catch (error) {
            console.error("친구신청 오류 : ", error);
        }
    }
}