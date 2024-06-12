-- CreateTable
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

-- AddForeignKey
ALTER TABLE
    "MissionCheck"
ADD
    CONSTRAINT "MissionCheck_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE
    "MissionCheck" DROP CONSTRAINT "MissionCheck_missionId_fkey";