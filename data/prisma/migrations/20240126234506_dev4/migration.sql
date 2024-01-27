/*
  Warnings:

  - You are about to drop the column `brandLabelId` on the `BrandMember` table. All the data in the column will be lost.
  - You are about to drop the column `producerId` on the `BrandMember` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `Claim` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `variation` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `itemTypeId` on the `PropertyGroup` table. All the data in the column will be lost.
  - You are about to drop the `Assembly` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BrandLabel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[itemId]` on the table `Property` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Assembly" DROP CONSTRAINT "Assembly_assemblyItemId_fkey";

-- DropForeignKey
ALTER TABLE "Assembly" DROP CONSTRAINT "Assembly_itemId_fkey";

-- DropForeignKey
ALTER TABLE "BrandMember" DROP CONSTRAINT "BrandMember_brandLabelId_fkey";

-- DropForeignKey
ALTER TABLE "BrandMember" DROP CONSTRAINT "BrandMember_producerId_fkey";

-- DropForeignKey
ALTER TABLE "Claim" DROP CONSTRAINT "Claim_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_brandLabelId_fkey";

-- DropForeignKey
ALTER TABLE "ItemProperty" DROP CONSTRAINT "ItemProperty_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemProperty" DROP CONSTRAINT "ItemProperty_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_groupId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyGroup" DROP CONSTRAINT "PropertyGroup_itemTypeId_fkey";

-- AlterTable
ALTER TABLE "BrandMember" DROP COLUMN "brandLabelId",
DROP COLUMN "producerId",
ADD COLUMN     "brandId" INTEGER,
ADD COLUMN     "productLineId" INTEGER;

-- AlterTable
ALTER TABLE "Claim" DROP COLUMN "itemId",
ADD COLUMN     "partId" INTEGER;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "groupId",
DROP COLUMN "name",
DROP COLUMN "order",
DROP COLUMN "variation",
ADD COLUMN     "itemId" INTEGER,
ADD COLUMN     "propertyTypeId" INTEGER,
ADD COLUMN     "value" TEXT,
ADD COLUMN     "valueDataMethod" TEXT;

-- AlterTable
ALTER TABLE "PropertyGroup" DROP COLUMN "itemTypeId",
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "Assembly";

-- DropTable
DROP TABLE "BrandLabel";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "ItemProperty";

-- DropTable
DROP TABLE "ItemType";

-- DropTable
DROP TABLE "Producer";

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameShort" TEXT,
    "nameAbbreviation" TEXT,
    "notes" TEXT,
    "webAddress" TEXT,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductLine" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "name" TEXT,
    "nameShort" TEXT,
    "nameAbbreviation" TEXT,
    "notes" TEXT,
    "webAddress" TEXT,

    CONSTRAINT "ProductLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HasPropertyType" (
    "id" SERIAL NOT NULL,
    "partTypeId" INTEGER,
    "propertyTypeId" INTEGER,
    "groupId" INTEGER,

    CONSTRAINT "HasPropertyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyType" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "name" TEXT,
    "description" TEXT,
    "valueDataType" TEXT,
    "valueDataTypeModifier" TEXT,
    "variation" TEXT,

    CONSTRAINT "PropertyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyLookup" (
    "id" SERIAL NOT NULL,
    "value" TEXT,
    "propertyTypeId" INTEGER,

    CONSTRAINT "PropertyLookup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartClass" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "name" TEXT NOT NULL,

    CONSTRAINT "PartClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HasPartClass" (
    "id" SERIAL NOT NULL,
    "partClassId" INTEGER,
    "partTypeId" INTEGER,

    CONSTRAINT "HasPartClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartType" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "PartType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "PartGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HasPart" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER,
    "groupId" INTEGER,

    CONSTRAINT "HasPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "name" TEXT,
    "notes" TEXT,
    "weight" DECIMAL(65,30),
    "weightUnit" TEXT,
    "productLineId" INTEGER,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WheelSpoke" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER,
    "length" DECIMAL(65,30),
    "tensionApplied" DECIMAL(65,30),
    "tensionUnit" TEXT,
    "preparation" TEXT,
    "notes" TEXT,
    "spokeId" INTEGER,
    "wheelId" INTEGER,

    CONSTRAINT "WheelSpoke_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wheel" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "notes" TEXT,
    "hubId" INTEGER,
    "rimId" INTEGER,

    CONSTRAINT "Wheel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildPart" (
    "id" SERIAL NOT NULL,
    "buildId" INTEGER,
    "partId" INTEGER,

    CONSTRAINT "BuildPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Build" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "status" TEXT,
    "notes" TEXT,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PartClass_name_key" ON "PartClass"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PartType_name_key" ON "PartType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Property_itemId_key" ON "Property"("itemId");

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandMember" ADD CONSTRAINT "BrandMember_productLineId_fkey" FOREIGN KEY ("productLineId") REFERENCES "ProductLine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandMember" ADD CONSTRAINT "BrandMember_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPropertyType" ADD CONSTRAINT "HasPropertyType_partTypeId_fkey" FOREIGN KEY ("partTypeId") REFERENCES "PartType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPropertyType" ADD CONSTRAINT "HasPropertyType_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "PropertyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPropertyType" ADD CONSTRAINT "HasPropertyType_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "PropertyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyLookup" ADD CONSTRAINT "PropertyLookup_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "PropertyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPartClass" ADD CONSTRAINT "HasPartClass_partClassId_fkey" FOREIGN KEY ("partClassId") REFERENCES "PartClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPartClass" ADD CONSTRAINT "HasPartClass_partTypeId_fkey" FOREIGN KEY ("partTypeId") REFERENCES "PartType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPart" ADD CONSTRAINT "HasPart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasPart" ADD CONSTRAINT "HasPart_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "PartGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_productLineId_fkey" FOREIGN KEY ("productLineId") REFERENCES "ProductLine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "PropertyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelSpoke" ADD CONSTRAINT "WheelSpoke_spokeId_fkey" FOREIGN KEY ("spokeId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelSpoke" ADD CONSTRAINT "WheelSpoke_wheelId_fkey" FOREIGN KEY ("wheelId") REFERENCES "Wheel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wheel" ADD CONSTRAINT "Wheel_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wheel" ADD CONSTRAINT "Wheel_rimId_fkey" FOREIGN KEY ("rimId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildPart" ADD CONSTRAINT "BuildPart_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildPart" ADD CONSTRAINT "BuildPart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;
