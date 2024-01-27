import { PrismaClient } from "../prisma/client";

export async function lookupPropertyGroup(prisma: PrismaClient, key: string): Promise<number | null> {
    const propertyGroupLookup = await prisma.propertyGroup.findFirst( { where: { name: key } });
    if(propertyGroupLookup) return propertyGroupLookup.id;
    return null;
}
  
export async function lookupPartClass(prisma: PrismaClient, key: string): Promise<number | null> {
    const partClassLookup = await prisma.partClass.findFirst( { where: { name: key } });
    if(partClassLookup) return partClassLookup.id;
    return null;
}