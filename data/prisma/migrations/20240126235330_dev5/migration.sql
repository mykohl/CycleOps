/*
  Warnings:

  - You are about to drop the `HasPartClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HasPropertyType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HasPartClass" DROP CONSTRAINT "HasPartClass_partClassId_fkey";

-- DropForeignKey
ALTER TABLE "HasPartClass" DROP CONSTRAINT "HasPartClass_partTypeId_fkey";

-- DropForeignKey
ALTER TABLE "HasPropertyType" DROP CONSTRAINT "HasPropertyType_groupId_fkey";

-- DropForeignKey
ALTER TABLE "HasPropertyType" DROP CONSTRAINT "HasPropertyType_partTypeId_fkey";

-- DropForeignKey
ALTER TABLE "HasPropertyType" DROP CONSTRAINT "HasPropertyType_propertyTypeId_fkey";

-- DropTable
DROP TABLE "HasPartClass";

-- DropTable
DROP TABLE "HasPropertyType";

-- CreateTable
CREATE TABLE "PropertyGroupMembership" (
    "id" SERIAL NOT NULL,
    "partTypeId" INTEGER,
    "propertyTypeId" INTEGER,
    "groupId" INTEGER,

    CONSTRAINT "PropertyGroupMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartClassMembership" (
    "id" SERIAL NOT NULL,
    "partClassId" INTEGER,
    "partTypeId" INTEGER,

    CONSTRAINT "PartClassMembership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PropertyGroupMembership" ADD CONSTRAINT "PropertyGroupMembership_partTypeId_fkey" FOREIGN KEY ("partTypeId") REFERENCES "PartType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupMembership" ADD CONSTRAINT "PropertyGroupMembership_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "PropertyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupMembership" ADD CONSTRAINT "PropertyGroupMembership_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "PropertyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartClassMembership" ADD CONSTRAINT "PartClassMembership_partClassId_fkey" FOREIGN KEY ("partClassId") REFERENCES "PartClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartClassMembership" ADD CONSTRAINT "PartClassMembership_partTypeId_fkey" FOREIGN KEY ("partTypeId") REFERENCES "PartType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
