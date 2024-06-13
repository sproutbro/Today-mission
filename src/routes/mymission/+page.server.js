import { getMissionbyId } from "$lib/db/mission.js";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const userId = event.locals.user.id

    // 내가만든미션 가져오기
    try {
        const result = await getMissionbyId(userId);
        const mission = setMission(result.rows)
        console.log("내가만든미션 가져오기 실행(rowCount): ", result.rowCount);
        return { mission }
    } catch (error) {
        console.error('내가만든미션 가져오기 오류 : ', error);
        throw error;
    }
}


// 가져온 내가만든미션 정리
function setMission(missionData) {
    const missionArray = [];
    missionData.forEach((v) => {
        let mission = missionArray.find((m) => m.id === v.id);
        if (!mission) {
            // 기존 missionId가 없으면 새로 추가
            mission = {
                id: v.id,
                missionName: v.missionName,
                userId: v.userId,
                missionCheck: [],
            };
            missionArray.push(mission);
        }
        // missionCheck 배열에 항목 추가
        mission.missionCheck.push({
            checkType: v.checkType,
            successMessage: v.successMessage,
        });
    });
    return missionArray;
}