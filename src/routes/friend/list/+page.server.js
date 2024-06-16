import { getFriends } from "$lib/db/friend.js";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const userId = event.locals.user.id;

    try {
        // 친구조회
        const friendsData = await getFriends(userId);
        const friends = friendsData.filter(row => row.status);
        const sendReqeusts = friendsData.filter(row => !row.status && row.userId === userId);
        const receivedRequests = friendsData.filter(row => !row.status && row.friendId === userId);
        console.log(friends);
        return { friends, sendReqeusts, receivedRequests }
    } catch (error) {
        console.error(error);
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    acceptFriendRequest: async (event) => {
        console.log(event.request)
    }
}