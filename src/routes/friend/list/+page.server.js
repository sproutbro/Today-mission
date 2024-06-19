import { getFriends, refuseFriendRequest, acceptFriendRequest } from "$lib/db/friend.js";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const userId = event.locals.user.id;

    try {
        // 친구조회
        const friendsData = await getFriends(userId);
        const friends = [];
        friendsData.forEach(value => {
            if (value.status) {
                friends.push(userId !== value.userId ? value.userId : value.friendId);
            }
        })
        const sendReqeusts = friendsData.filter(row => !row.status && row.userId === userId);
        const receivedRequests = friendsData.filter(row => !row.status && row.friendId === userId);
        return { friends, sendReqeusts, receivedRequests }
    } catch (error) {
        console.error(error);
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    responseFriendRequest: async (event) => {
        const userId = event.locals.user.id;

        // 친구요청 수락/거절
        const formData = Object.fromEntries(await event.request.formData());
        try {
            if (formData.accept === "true") {
                const result = await acceptFriendRequest(formData.userId, userId);
                console.log("친구요청 수락 : ", result);
            } else {
                const result = await refuseFriendRequest(formData.userId);
                console.log("친구요청 거절 : ", result.rowCount);
            }
        } catch (error) {
            console.error(error);
        }
        console.log(formData);
    }
}