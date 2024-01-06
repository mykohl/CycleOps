-- CreateTable
CREATE TABLE "Cyclist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Ownership" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "acquired" DATETIME,
    "condition" TEXT,
    "notes" TEXT,
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

-- CreateTable
CREATE TABLE "Bicycle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "BicyclePart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER,
    "notes" TEXT,
    "bicycleId" INTEGER,
    "partId" INTEGER,
    CONSTRAINT "BicyclePart_bicycleId_fkey" FOREIGN KEY ("bicycleId") REFERENCES "Bicycle" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BicyclePart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Maker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "Part" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categories" TEXT,
    "type" TEXT,
    "designationCode" TEXT,
    "name" TEXT,
    "notes" TEXT,
    "makerId" INTEGER,
    CONSTRAINT "Part_makerId_fkey" FOREIGN KEY ("makerId") REFERENCES "Maker" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

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

-- CreateTable
CREATE TABLE "Wheel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "notes" TEXT,
    "hubId" INTEGER,
    "rimId" INTEGER,
    CONSTRAINT "Wheel_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "Hub" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wheel_rimId_fkey" FOREIGN KEY ("rimId") REFERENCES "Rim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Wheelset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "notes" TEXT,
    "wheelFowardId" INTEGER,
    "wheelBackId" INTEGER,
    CONSTRAINT "Wheelset_wheelFowardId_fkey" FOREIGN KEY ("wheelFowardId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wheelset_wheelBackId_fkey" FOREIGN KEY ("wheelBackId") REFERENCES "Wheel" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Hub_partId_key" ON "Hub"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "Rim_partId_key" ON "Rim"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "Cogset_partId_key" ON "Cogset"("partId");
