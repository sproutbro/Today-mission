import { json } from '@sveltejs/kit';
import { insertMission, insertMissioncheck } from "$lib/db/mission.js";

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    // 사용자 입력 자료
    const { $checkTypeArray, mission_name } = await event.request.json();
    // 사용자 아이디 저장
    const userId = event.locals.user.id;

    try {
        // 미션 만들기
        const newMission = await insertMission(mission_name, userId);
        console.log('New mission:', newMission);

        // 미션 확인 만들기
        const missionId = newMission.id;
        const values = createCheckValues(missionId, $checkTypeArray);
        const result = await insertMissioncheck(values);
        console.log('Missioncheck inserted: ', result.rowCount);

        return json({ status: 201, message: "미션 만들기가 완료되었습니다." })
    } catch (error) {
        console.error('Error in create mission server:', error);
    }

}

function createCheckValues(missionId, checkTypeArray) {
    const values = []
    checkTypeArray.forEach((e) => {
        values.push(`(${missionId}, '${e.success_text ? e.success_text : ""}', '${e.check_type}')`)
    });
    return values;
}