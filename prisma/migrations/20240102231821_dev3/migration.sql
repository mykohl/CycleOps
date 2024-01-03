/*
  Warnings:

  - You are about to drop the column `spokeCount` on the `PartHub` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bicycle" ADD COLUMN "notes" TEXT;

-- AlterTable
ALTER TABLE "BicyclePart" ADD COLUMN "notes" TEXT;

-- AlterTable
ALTER TABLE "Maker" ADD COLUMN "notes" TEXT;

-- AlterTable
ALTER TABLE "Ownership" ADD COLUMN "notes" TEXT;

-- AlterTable
ALTER TABLE "Part" ADD COLUMN "notes" TEXT;

-- AlterTable
ALTER TABLE "Wheel" ADD COLUMN "notes" TEXT;

-- AlterTable
ALTER TABLE "Wheelset" ADD COLUMN "notes" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PartHub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partId" INTEGER,
    "specSpokeCount" INTEGER,
    "specOLD" REAL,
    "specFlangeDiameterLeft" REAL,
    "specFlangeDiameterRight" REAL,
    "specFlangeLeftToCenter" REAL,
    "specFlangeRightToCenter" REAL,
    "specFlangeLeftToOLN" REAL,
    "specFlangeRightToOLN" REAL,
    "specSpokeHoleDiameter" REAL,
    CONSTRAINT "PartHub_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PartHub" ("id", "partId", "specFlangeDiameterLeft", "specFlangeDiameterRight", "specFlangeLeftToCenter", "specFlangeLeftToOLN", "specFlangeRightToCenter", "specFlangeRightToOLN", "specOLD", "specSpokeHoleDiameter") SELECT "id", "partId", "specFlangeDiameterLeft", "specFlangeDiameterRight", "specFlangeLeftToCenter", "specFlangeLeftToOLN", "specFlangeRightToCenter", "specFlangeRightToOLN", "specOLD", "specSpokeHoleDiameter" FROM "PartHub";
DROP TABLE "PartHub";
ALTER TABLE "new_PartHub" RENAME TO "PartHub";
CREATE UNIQUE INDEX "PartHub_partId_key" ON "PartHub"("partId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
