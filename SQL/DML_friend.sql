-- 친구요청
INSERT INTO
    "Friend" ("userId", "friendId")
VALUES
    ('1234', '1111');

-- 보낸 친구요청 조회
SELECT
    "userId",
    "friendId",
    "status"
FROM
    "Friend"
WHERE
    "userId" = '1234'
    OR "friendId" = '1234';

-- 친구요청 거절
DELETE FROM
    "Friend"
WHERE
    "userId" = 'userId';

-- 친구요청 수락
UPDATE
    "Friend"
SET
    "status" = true
WHERE
    "userId" = '${friendId}'
    AND "friendId" = '${userId}';