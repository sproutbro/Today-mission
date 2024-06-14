import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const { userId } = await event.request.json();
    console.log("친구 서버", userId);

    return json(null);
    // // 사용자 입력 자료
    // const { $checkTypeArray, mission_name } = await event.request.json();
    // // 사용자 아이디 저장
    // const userId = event.locals.user.id;

    // try {
    //     // 미션 만들기
    //     const newMission = await insertMission(mission_name, userId);
    //     console.log('New mission:', newMission);

    //     // 미션 확인 만들기
    //     const missionId = newMission.id;
    //     const values = createCheckValues(missionId, $checkTypeArray);
    //     const result = await insertMissioncheck(values);
    //     console.log('Missioncheck inserted: ', result.rowCount);

    //     return json({ status: 201, message: "미션 만들기가 완료되었습니다." })
    // } catch (error) {
    //     console.error('Error in create mission server:', error);
    // }

}