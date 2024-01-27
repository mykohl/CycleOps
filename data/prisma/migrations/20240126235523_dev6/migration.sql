/*
  Warnings:

  - You are about to drop the `HasPart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HasPart" DROP CONSTRAINT "HasPart_groupId_fkey";

-- DropForeignKey
ALTER TABLE "HasPart" DROP CONSTRAINT "HasPart_partId_fkey";

-- DropTable
DROP TABLE "HasPart";

-- CreateTable
CREATE TABLE "PartGroupMembership" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER,
    "groupId" INTEGER,

    CONSTRAINT "PartGroupMembership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartGroupMembership" ADD CONSTRAINT "PartGroupMembership_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartGroupMembership" ADD CONSTRAINT "PartGroupMembership_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "PartGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
