/*
  Warnings:

  - You are about to drop the column `groupId` on the `PropertyGroupMembership` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PropertyGroupMembership" DROP CONSTRAINT "PropertyGroupMembership_groupId_fkey";

-- AlterTable
ALTER TABLE "PropertyGroupMembership" DROP COLUMN "groupId",
ADD COLUMN     "propertyGroupId" INTEGER;

-- AddForeignKey
ALTER TABLE "PropertyGroupMembership" ADD CONSTRAINT "PropertyGroupMembership_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
