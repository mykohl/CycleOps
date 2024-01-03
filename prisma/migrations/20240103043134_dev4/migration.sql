/*
  Warnings:

  - You are about to drop the column `WheelBackId` on the `Wheelset` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cyclist" ADD COLUMN "name" TEXT;

-- AlterTable
ALTER TABLE "Part" ADD COLUMN "categories" TEXT;

-- CreateTable
CREATE TABLE "PartCogset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT,
    "cogs" TEXT,
    "notes" TEXT,
    "partId" INTEGER,
    CONSTRAINT "PartCogset_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wheelset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "notes" TEXT,
    "wheelFowardId" INTEGER,
    "wheelBackId" INTEGER,
    CONSTRAINT "Wheelset_wheelFowardId_fkey" FOREIGN KEY ("wheelFowardId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wheelset_wheelBackId_fkey" FOREIGN KEY ("wheelBackId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Wheelset" ("id", "name", "notes", "wheelFowardId") SELECT "id", "name", "notes", "wheelFowardId" FROM "Wheelset";
DROP TABLE "Wheelset";
ALTER TABLE "new_Wheelset" RENAME TO "Wheelset";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PartCogset_partId_key" ON "PartCogset"("partId");
