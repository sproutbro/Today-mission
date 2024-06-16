import { executeQuery } from "$lib/db.js";

// 친구신청
async function addFriend(userId, friendId) {
    const SQL = `
        INSERT INTO
            "Friend" ("userId", "friendId")
        VALUES
            ($1, $2) RETURNING *;
    `;
    const params = [userId, friendId];
    try {
        const result = await executeQuery(SQL, params);
        console.log('친구신청 DB(rowCount) : ', result.rowCount);
        return result.rows[0];
    } catch (error) {
        if (error.length === 210) {
            console.error("중복된 요청 입니다");
            return error.length;
        }
        console.error('친구신청 디비오류 : ', error);
        throw error;
    }
}

// 친구조회
async function getFriends(userId) {
    const SQL = `
        SELECT
            "userId",
            "friendId",
            "status"
        FROM
            "Friend"
        WHERE
            "userId" = '${userId}'
            OR "friendId" = '${userId}';
    `;
    try {
        const result = await executeQuery(SQL);
        console.log('친구조회 DB(rowCount) : ', result.rowCount);
        return result.rows;
    } catch (error) {
        console.error('친구조회 디비오류 : ', error);
        throw error;
    }
}

export { addFriend, getFriends };