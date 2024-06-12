-- SELECT User
SELECT
    id
FROM
    "User"
where
    id = '';

-- INSERT User
INSERT INTO
    "User" ("id", "password")
VALUES
    ('', '') RETURNING id;

-- INSERST Mission
INSERT INTO
    "Mission" ("missionName", "userId")
VALUES
    ('$1', '$2') RETURNING id;

-- INSERT MissionCheck
INSERT INTO
    "MissionCheck" ("missionId", "successMessage", "checkType")
VALUES
    ('', '', '');