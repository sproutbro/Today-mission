-- 유저
SELECT
    id
FROM
    "User"
WHERE
    "id" = '1234';

INSERT INTO
    "User" ("id", "password")
VALUES
    ('', '') RETURNING id;

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