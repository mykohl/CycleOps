-- AlterTable
ALTER TABLE "PartRim" ADD COLUMN "specSectionHeight" REAL;
ALTER TABLE "PartRim" ADD COLUMN "specWidthExternal" REAL;
ALTER TABLE "PartRim" ADD COLUMN "specWidthInternal" REAL;

-- CreateTable
CREATE TABLE "Cyclist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Ownership" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" INTEGER,
    CONSTRAINT "Ownership_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Cyclist" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Wheel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "hubId" INTEGER,
    "rimId" INTEGER,
    CONSTRAINT "Wheel_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "PartHub" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wheel_rimId_fkey" FOREIGN KEY ("rimId") REFERENCES "PartRim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Wheelset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "wheelFowardId" INTEGER,
    "WheelBackId" INTEGER,
    CONSTRAINT "Wheelset_wheelFowardId_fkey" FOREIGN KEY ("wheelFowardId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wheelset_WheelBackId_fkey" FOREIGN KEY ("WheelBackId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
