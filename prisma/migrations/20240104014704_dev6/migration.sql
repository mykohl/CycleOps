/*
  Warnings:

  - You are about to drop the `PartCogset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PartHub` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PartRim` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "PartCogset_partId_key";

-- DropIndex
DROP INDEX "PartHub_partId_key";

-- DropIndex
DROP INDEX "PartRim_partId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PartCogset";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PartHub";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PartRim";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Hub" (
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
    CONSTRAINT "Hub_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partId" INTEGER,
    "specEffectiveDiameter" REAL,
    "specWidthInternal" REAL,
    "specWidthExternal" REAL,
    "specSectionHeight" REAL,
    CONSTRAINT "Rim_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cogset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT,
    "cogs" TEXT,
    "notes" TEXT,
    "partId" INTEGER,
    CONSTRAINT "Cogset_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wheel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "notes" TEXT,
    "hubId" INTEGER,
    "rimId" INTEGER,
    CONSTRAINT "Wheel_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "Hub" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wheel_rimId_fkey" FOREIGN KEY ("rimId") REFERENCES "Rim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Wheel" ("hubId", "id", "name", "notes", "rimId") SELECT "hubId", "id", "name", "notes", "rimId" FROM "Wheel";
DROP TABLE "Wheel";
ALTER TABLE "new_Wheel" RENAME TO "Wheel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Hub_partId_key" ON "Hub"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "Rim_partId_key" ON "Rim"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "Cogset_partId_key" ON "Cogset"("partId");
