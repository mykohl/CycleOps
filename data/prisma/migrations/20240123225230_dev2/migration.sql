/*
  Warnings:

  - You are about to drop the column `categories` on the `ItemType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ItemType" DROP COLUMN "categories",
ADD COLUMN     "group" TEXT;
