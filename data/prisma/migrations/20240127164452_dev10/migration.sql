-- AlterTable
ALTER TABLE "PartClassMembership" ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PropertyGroupMembership" ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false;
