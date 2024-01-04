/*
  Warnings:

  - You are about to drop the column `specFlangeDiameterLeft` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specFlangeDiameterRight` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specFlangeLeftToCenter` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specFlangeLeftToOLN` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specFlangeRightToCenter` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specFlangeRightToOLN` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specOLD` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specSpokeCount` on the `PartHub` table. All the data in the column will be lost.
  - You are about to drop the column `specSpokeHoleDiameter` on the `PartHub` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PartHub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partId" INTEGER,
    "position" TEXT,
    "spokeCount" INTEGER,
    "overLocknutDistance" REAL,
    "flangeDiameterLeft" REAL,
    "flangeDiameterRight" REAL,
    "flangeLeftToCenter" REAL,
    "flangeRightToCenter" REAL,
    "sflangeLeftToOLN" REAL,
    "flangeRightToOLN" REAL,
    "spokeHoleDiameter" REAL,
    CONSTRAINT "PartHub_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PartHub" ("id", "partId") SELECT "id", "partId" FROM "PartHub";
DROP TABLE "PartHub";
ALTER TABLE "new_PartHub" RENAME TO "PartHub";
CREATE UNIQUE INDEX "PartHub_partId_key" ON "PartHub"("partId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
