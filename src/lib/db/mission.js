import { executeQuery } from "$lib/db.js";

// 미션 생성
async function insertMission(missionName, userId) {
    const SQL = `
        INSERT INTO "Mission" 
            ("missionName", "userId")
        VALUES
            ($1, $2) RETURNING *;`;
    const params = [missionName, userId];

    try {
        const result = await executeQuery(SQL, params);
        console.log('미션 생성 디비실행 : ', result.rowCount);
        return result.rows[0];
    } catch (error) {
        console.error('미션 생성 디비오류 : ', error);
        throw error;
    }
}

// 미션 확인 생성
async function insertMissioncheck(values) {
    const SQL = `
        INSERT INTO "MissionCheck" 
            ("missionId", "successMessage", "checkType")
        VALUES
            ${values};`;
    try {
        console.log('미션확인 생성 디비실행');
        return await executeQuery(SQL);
    } catch (error) {
        console.error('미션확인 생성 디비오류 : ', error);
        throw error;
    }
}

// 내가만든 미션 가져오기
async function getMissionbyId(userId) {
    const SQL = `
        SELECT
            "Mission".id,
            "Mission"."missionName",
            "Mission"."userId",
            "Mission"."createdAt",
            JSON_AGG(
                JSON_BUILD_OBJECT(
                    'message',
                    "MissionCheck"."successMessage",
                    'type',
                    "MissionCheck"."checkType"
                )
            ) AS "MissionCheck"
        FROM
            "Mission"
            LEFT JOIN "MissionCheck" ON "Mission".id = "MissionCheck"."missionId"
        WHERE
            "Mission"."userId" = '${userId}'
        GROUP BY
            "Mission".id,
            "Mission"."missionName";
    `;

    try {
        console.log("내가만든미션 가져오기 디비실행(userId) : ", userId);
        return await executeQuery(SQL);
    } catch (error) {
        console.error('내가만든미션 가져오기 디비오류 : ', error);
        throw error;
    }
}

export { insertMission, insertMissioncheck, getMissionbyId }