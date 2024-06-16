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