import { PartsAdminService } from '../../services/parts-admin.service';
import { 
    PartClassDto,
    PropertyGroupDto
  } from "../models/model.dto";
  import {
    propertyTypeSeedModel,
    partTypeSeedModel
  } from '../models/model.seed';

export async function seedPartClass(data: PartClassDto[]) {
    for (const partClass of data) {
      if(partClass.order && partClass.name) {
        const partClassDto: PartClassDto = {
          order: partClass.order,
          name: partClass.name
        };
        await PartsAdminService.addPartClass(partClassDto);
      }
    }
  }
  
  export async function seedPropertyGroup(data: PropertyGroupDto[]) {
    for (const propertyGroup of data) {
      if(propertyGroup.order && propertyGroup.name) {
        PartsAdminService.addPropertyGroup(propertyGroup.order, propertyGroup.name, propertyGroup.description);
      }
    }  
  }
  
  export async function seedPropertyType(data: propertyTypeSeedModel[]) {
    for (const propertyType of data) {
      if(propertyType.order && propertyType.name) {
        const record = await PartsAdminService.addPropertyType(propertyType.order, propertyType.name, propertyType.valueDataType)
      
        if(record && propertyType.propertyGroupPrimary) {
          const groupIdPrimary = await PartsAdminService.lookupPropertyGroup(propertyType.propertyGroupPrimary);
          if(groupIdPrimary) {
            await PartsAdminService.addPropertyGroupMember(record.id, groupIdPrimary.id, true);
          }
        }
    
        if(record && propertyType.propertyGroupsOther) {
          for (const group of propertyType.propertyGroupsOther) {
            const groupIdOther = await PartsAdminService.lookupPropertyGroup(group);
            if(groupIdOther) {
              await PartsAdminService.addPropertyGroupMember(record.id, groupIdOther.id, false);
            }
          }
        }   
      }
    }
  }
  
  export async function seedPartType(data: partTypeSeedModel[]) {
    for (const partType of data) {
      const record = await PartsAdminService.addPartType(partType.order, partType.name);
  
      if(record && partType.partClassPrimary) {
        const partClassPrimary = await PartsAdminService.lookupPartClass(partType.partClassPrimary);
        if(partClassPrimary) {
          await PartsAdminService.addPartClassMember({
            partTypeId: record.id, 
            partClassId: partClassPrimary.id, 
            isPrimary: true
          });
        }
      }
  
      if(record && partType.partClassesOther) {
        for(const partClass of partType.partClassesOther) {
          const partClassOther = await PartsAdminService.lookupPartClass(partClass);
          if(partClassOther) {
            await PartsAdminService.addPartClassMember({
              partTypeId: record.id,
              partClassId: partClassOther.id, 
              isPrimary: false
            });
          }
        }
      }
  
      if(record && partType.propertyTypes) {
        for(const propertyType of partType.propertyTypes) {
          const propertyTypeLookup = await PartsAdminService.lookupPropertyType(propertyType);
          if(propertyTypeLookup) {
            await PartsAdminService.addPropertyTypeMember(record.id, propertyTypeLookup.id);
          }
        }
      }
    }
  }