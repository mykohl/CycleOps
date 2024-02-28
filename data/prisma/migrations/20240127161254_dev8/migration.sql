/*
  Warnings:

  - You are about to drop the column `groupId` on the `PartGroupMembership` table. All the data in the column will be lost.
  - You are about to drop the `Cyclist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Claim" DROP CONSTRAINT "Claim_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "PartGroupMembership" DROP CONSTRAINT "PartGroupMembership_groupId_fkey";

-- AlterTable
ALTER TABLE "PartGroupMembership" DROP COLUMN "groupId",
ADD COLUMN     "partGroupId" INTEGER;

-- DropTable
DROP TABLE "Cyclist";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameLast" TEXT,
    "nameFirst" TEXT,
    "providerId" TEXT NOT NULL,
    "provider" TEXT,
    "roles" TEXT,
    "registered" TIMESTAMP(3),
    "lastLogIn" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_providerId_key" ON "User"("providerId");

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartGroupMembership" ADD CONSTRAINT "PartGroupMembership_partGroupId_fkey" FOREIGN KEY ("partGroupId") REFERENCES "PartGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
