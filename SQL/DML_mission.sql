-- 미션
SELECT
    *
FROM
    "Mission"
WHERE
    "userId" = '1234';

INSERT INTO
    "Mission" ("missionName", "userId")
VALUES
    ('$1', '$2') RETURNING id;

-- 미션확인
INSERT INTO
    "MissionCheck" ("missionId", "successMessage", "checkType")
VALUES
    ('', '', '');

SELECT
    m."missionName",
    m."userId",
    m."createdAt",
    mc."missionId",
    mc."successMessage",
    mc."checkType"
FROM
    "Mission" m
    JOIN "MissionCheck" mc ON m."id" = mc."missionId"
WHERE
    m."userId" = '1234';

-- 미션가져오기
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
    "Mission"."userId" = '1234'
GROUP BY
    "Mission".id,
    "Mission"."missionName";