-- CreateTable
CREATE TABLE "Maker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Part" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT,
    "name" TEXT,
    "makerId" INTEGER,
    CONSTRAINT "Part_makerId_fkey" FOREIGN KEY ("makerId") REFERENCES "Maker" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PartHub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partId" INTEGER,
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

-- CreateTable
CREATE TABLE "PartRim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partId" INTEGER,
    "specEffectiveDiameter" REAL,
    CONSTRAINT "PartRim_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PartHub_partId_key" ON "PartHub"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "PartRim_partId_key" ON "PartRim"("partId");
