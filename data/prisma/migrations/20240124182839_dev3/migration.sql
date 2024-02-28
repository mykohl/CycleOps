/*
  Warnings:

  - You are about to drop the column `group` on the `ItemType` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the `PropertyDefinition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_typeId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyDefinition" DROP CONSTRAINT "PropertyDefinition_itemTypeId_fkey";

-- DropIndex
DROP INDEX "Property_itemId_key";

-- AlterTable
ALTER TABLE "ItemType" DROP COLUMN "group";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "itemId",
DROP COLUMN "typeId",
DROP COLUMN "value",
ADD COLUMN     "groupId" INTEGER,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "order" INTEGER,
ADD COLUMN     "variation" TEXT;

-- DropTable
DROP TABLE "PropertyDefinition";

-- CreateTable
CREATE TABLE "PropertyGroup" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "name" TEXT NOT NULL,
    "itemTypeId" INTEGER,

    CONSTRAINT "PropertyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemProperty" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER,
    "propertyId" INTEGER,
    "value" TEXT,

    CONSTRAINT "ItemProperty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyGroup_name_key" ON "PropertyGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ItemProperty_itemId_key" ON "ItemProperty"("itemId");

-- AddForeignKey
ALTER TABLE "PropertyGroup" ADD CONSTRAINT "PropertyGroup_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "ItemType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "PropertyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemProperty" ADD CONSTRAINT "ItemProperty_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemProperty" ADD CONSTRAINT "ItemProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;
