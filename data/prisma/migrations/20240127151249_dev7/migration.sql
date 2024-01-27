/*
  Warnings:

  - You are about to drop the column `partTypeId` on the `PropertyGroupMembership` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PropertyGroupMembership" DROP CONSTRAINT "PropertyGroupMembership_partTypeId_fkey";

-- AlterTable
ALTER TABLE "PropertyGroupMembership" DROP COLUMN "partTypeId";

-- CreateTable
CREATE TABLE "PropertyTypeMembership" (
    "id" SERIAL NOT NULL,
    "propertyTypeId" INTEGER,
    "partTypeId" INTEGER,

    CONSTRAINT "PropertyTypeMembership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PropertyTypeMembership" ADD CONSTRAINT "PropertyTypeMembership_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "PropertyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyTypeMembership" ADD CONSTRAINT "PropertyTypeMembership_partTypeId_fkey" FOREIGN KEY ("partTypeId") REFERENCES "PartType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
