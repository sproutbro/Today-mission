-- 테이블 만들기
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "missionName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "MissionCheck" (
    "id" SERIAL NOT NULL,
    "missionId" INTEGER NOT NULL,
    "successMessage" TEXT DEFAULT '완료!',
    "checkType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MissionCheck_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Friend" (
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Friend_pkey" PRIMARY KEY ("friendId", "userId")
);

CREATE TABLE "UserMission" (
    "userId" TEXT NOT NULL,
    "missionId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserMission_pkey" PRIMARY KEY ("userId", "missionId")
);

-- 관계 추가
ALTER TABLE
    "UserMission"
ADD
    CONSTRAINT "UserMission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE
    "MissionCheck"
ADD
    CONSTRAINT "MissionCheck_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE
    "Friend"
ADD
    CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE
    "Friend"
ADD
    CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- 관계 삭제
ALTER TABLE
    "MissionCheck" DROP CONSTRAINT "MissionCheck_missionId_fkey";