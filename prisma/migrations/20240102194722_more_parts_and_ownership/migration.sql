-- AlterTable
ALTER TABLE "Part" ADD COLUMN "designationCode" TEXT;

-- AlterTable
ALTER TABLE "PartHub" ADD COLUMN "spokeCount" INTEGER;

-- CreateTable
CREATE TABLE "Bicycle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "BicyclePart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER,
    "bicycleId" INTEGER,
    "partId" INTEGER,
    CONSTRAINT "BicyclePart_bicycleId_fkey" FOREIGN KEY ("bicycleId") REFERENCES "Bicycle" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BicyclePart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ownership" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "acquired" DATETIME,
    "condition" TEXT,
    "ownerId" INTEGER,
    "bicycleId" INTEGER,
    "wheelId" INTEGER,
    "wheelSetId" INTEGER,
    "partId" INTEGER,
    CONSTRAINT "Ownership_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Cyclist" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Ownership_bicycleId_fkey" FOREIGN KEY ("bicycleId") REFERENCES "Bicycle" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Ownership_wheelId_fkey" FOREIGN KEY ("wheelId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Ownership_wheelSetId_fkey" FOREIGN KEY ("wheelSetId") REFERENCES "Wheelset" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Ownership_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ownership" ("id", "ownerId") SELECT "id", "ownerId" FROM "Ownership";
DROP TABLE "Ownership";
ALTER TABLE "new_Ownership" RENAME TO "Ownership";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
