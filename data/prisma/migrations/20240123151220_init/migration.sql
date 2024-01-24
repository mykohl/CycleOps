-- CreateTable
CREATE TABLE "Cyclist" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameLast" TEXT,
    "nameFirst" TEXT,
    "providerId" TEXT NOT NULL,
    "provider" TEXT,
    "roles" TEXT,
    "registered" TIMESTAMP(3),
    "lastLogIn" TIMESTAMP(3),

    CONSTRAINT "Cyclist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claim" (
    "id" SERIAL NOT NULL,
    "claimType" TEXT,
    "acquired" TIMESTAMP(3),
    "condition" TEXT,
    "notes" TEXT,
    "ownerId" INTEGER,
    "itemId" INTEGER,
    "itemAssemblyId" INTEGER,

    CONSTRAINT "Claim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameShort" TEXT,
    "nameAbbreviation" TEXT,
    "notes" TEXT,
    "webAddress" TEXT,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandMember" (
    "id" SERIAL NOT NULL,
    "brandLabelId" INTEGER,
    "producerId" INTEGER,

    CONSTRAINT "BrandMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandLabel" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "name" TEXT,

    CONSTRAINT "BrandLabel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "categories" TEXT,
    "type" TEXT,
    "designationCode" TEXT,
    "name" TEXT,
    "notes" TEXT,
    "brandLabelId" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPropertyType" (
    "id" SERIAL NOT NULL,
    "itemType" TEXT,
    "propertyName" TEXT,

    CONSTRAINT "ItemPropertyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemProperty" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER,
    "typeId" INTEGER,

    CONSTRAINT "ItemProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemAssemblyComponents" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "itemAssemblyId" INTEGER,
    "componentItemId" INTEGER,
    "componentItemAssemblyId" INTEGER,

    CONSTRAINT "ItemAssemblyComponents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemAssembly" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "name" TEXT,
    "notes" TEXT,
    "brandLabelId" INTEGER,

    CONSTRAINT "ItemAssembly_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cyclist_providerId_key" ON "Cyclist"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemType_name_key" ON "ItemType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ItemProperty_itemId_key" ON "ItemProperty"("itemId");

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Cyclist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_itemAssemblyId_fkey" FOREIGN KEY ("itemAssemblyId") REFERENCES "ItemAssembly"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandMember" ADD CONSTRAINT "BrandMember_brandLabelId_fkey" FOREIGN KEY ("brandLabelId") REFERENCES "BrandLabel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandMember" ADD CONSTRAINT "BrandMember_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_brandLabelId_fkey" FOREIGN KEY ("brandLabelId") REFERENCES "BrandLabel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemProperty" ADD CONSTRAINT "ItemProperty_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemProperty" ADD CONSTRAINT "ItemProperty_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ItemPropertyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemAssemblyComponents" ADD CONSTRAINT "ItemAssemblyComponents_itemAssemblyId_fkey" FOREIGN KEY ("itemAssemblyId") REFERENCES "ItemAssembly"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemAssemblyComponents" ADD CONSTRAINT "ItemAssemblyComponents_componentItemId_fkey" FOREIGN KEY ("componentItemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemAssemblyComponents" ADD CONSTRAINT "ItemAssemblyComponents_componentItemAssemblyId_fkey" FOREIGN KEY ("componentItemAssemblyId") REFERENCES "ItemAssembly"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemAssembly" ADD CONSTRAINT "ItemAssembly_brandLabelId_fkey" FOREIGN KEY ("brandLabelId") REFERENCES "BrandLabel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
