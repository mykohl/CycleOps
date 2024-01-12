/*
  Warnings:

  - Made the column `providerId` on table `Cyclist` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cyclist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "nameLast" TEXT,
    "nameFirst" TEXT,
    "providerId" TEXT NOT NULL,
    "provider" TEXT,
    "roles" TEXT,
    "registered" DATETIME,
    "lastLogIn" DATETIME
);
INSERT INTO "new_Cyclist" ("id", "lastLogIn", "name", "nameFirst", "nameLast", "provider", "providerId", "registered", "roles") SELECT "id", "lastLogIn", "name", "nameFirst", "nameLast", "provider", "providerId", "registered", "roles" FROM "Cyclist";
DROP TABLE "Cyclist";
ALTER TABLE "new_Cyclist" RENAME TO "Cyclist";
CREATE UNIQUE INDEX "Cyclist_providerId_key" ON "Cyclist"("providerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
