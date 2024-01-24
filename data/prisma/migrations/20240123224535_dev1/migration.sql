/*
  Warnings:

  - You are about to drop the column `itemAssemblyId` on the `Claim` table. All the data in the column will be lost.
  - You are about to drop the column `categories` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `designationCode` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `ItemAssembly` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemAssemblyComponents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemPropertyType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Claim" DROP CONSTRAINT "Claim_itemAssemblyId_fkey";

-- DropForeignKey
ALTER TABLE "ItemAssembly" DROP CONSTRAINT "ItemAssembly_brandLabelId_fkey";

-- DropForeignKey
ALTER TABLE "ItemAssemblyComponents" DROP CONSTRAINT "ItemAssemblyComponents_componentItemAssemblyId_fkey";

-- DropForeignKey
ALTER TABLE "ItemAssemblyComponents" DROP CONSTRAINT "ItemAssemblyComponents_componentItemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemAssemblyComponents" DROP CONSTRAINT "ItemAssemblyComponents_itemAssemblyId_fkey";

-- DropForeignKey
ALTER TABLE "ItemProperty" DROP CONSTRAINT "ItemProperty_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemProperty" DROP CONSTRAINT "ItemProperty_typeId_fkey";

-- AlterTable
ALTER TABLE "Claim" DROP COLUMN "itemAssemblyId";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "categories",
DROP COLUMN "designationCode",
ADD COLUMN     "weight" DECIMAL(65,30),
ADD COLUMN     "weightUnit" TEXT;

-- AlterTable
ALTER TABLE "ItemType" ADD COLUMN     "categories" TEXT;

-- DropTable
DROP TABLE "ItemAssembly";

-- DropTable
DROP TABLE "ItemAssemblyComponents";

-- DropTable
DROP TABLE "ItemProperty";

-- DropTable
DROP TABLE "ItemPropertyType";

-- CreateTable
CREATE TABLE "Assembly" (
    "id" SERIAL NOT NULL,
    "assemblyItemId" INTEGER,
    "itemId" INTEGER,

    CONSTRAINT "Assembly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyDefinition" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "group" TEXT,
    "name" TEXT,
    "variation" TEXT,
    "itemTypeId" INTEGER,

    CONSTRAINT "PropertyDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER,
    "typeId" INTEGER,
    "value" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_itemId_key" ON "Property"("itemId");

-- AddForeignKey
ALTER TABLE "Assembly" ADD CONSTRAINT "Assembly_assemblyItemId_fkey" FOREIGN KEY ("assemblyItemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assembly" ADD CONSTRAINT "Assembly_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyDefinition" ADD CONSTRAINT "PropertyDefinition_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "ItemType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "PropertyDefinition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
