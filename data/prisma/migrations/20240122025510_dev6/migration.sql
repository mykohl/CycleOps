/*
  Warnings:

  - You are about to drop the column `webaddress` on the `Maker` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Maker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "nameShort" TEXT,
    "nameAbbreviation" TEXT,
    "notes" TEXT,
    "webAddress" TEXT,
    "makesParts" BOOLEAN,
    "makesFrames" BOOLEAN,
    "makesTools" BOOLEAN,
    "makesAccessories" BOOLEAN,
    "makesGear" BOOLEAN,
    "makesBikes" BOOLEAN,
    "makesWheels" BOOLEAN
);
INSERT INTO "new_Maker" ("id", "makesAccessories", "makesBikes", "makesFrames", "makesGear", "makesParts", "makesTools", "makesWheels", "name", "nameAbbreviation", "nameShort", "notes") SELECT "id", "makesAccessories", "makesBikes", "makesFrames", "makesGear", "makesParts", "makesTools", "makesWheels", "name", "nameAbbreviation", "nameShort", "notes" FROM "Maker";
DROP TABLE "Maker";
ALTER TABLE "new_Maker" RENAME TO "Maker";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
