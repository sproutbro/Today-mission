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