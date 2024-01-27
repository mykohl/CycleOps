import { ClassificationService } from '../../services/classification.service';
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
        await ClassificationService.addPartClass(partClass.order, partClass.name);
      }
    }
  }
  
  export async function seedPropertyGroup(data: PropertyGroupDto[]) {
    for (const propertyGroup of data) {
      if(propertyGroup.order && propertyGroup.name) {
        ClassificationService.addPropertyGroup(propertyGroup.order, propertyGroup.name, propertyGroup.description);
      }
    }  
  }
  
  export async function seedPropertyType(data: propertyTypeSeedModel[]) {
    for (const propertyType of data) {
      if(propertyType.order && propertyType.name) {
        const record = await ClassificationService.addPropertyType(propertyType.order, propertyType.name, propertyType.valueDataType)
      
        if(record && propertyType.propertyGroupPrimary) {
          const groupIdPrimary = await ClassificationService.lookupPropertyGroup(propertyType.propertyGroupPrimary);
          if(groupIdPrimary) {
            await ClassificationService.addPropertyGroupMember(record.id, groupIdPrimary.id, true);
          }
        }
    
        if(record && propertyType.propertyGroupsOther) {
          for (const group of propertyType.propertyGroupsOther) {
            const groupIdOther = await ClassificationService.lookupPropertyGroup(group);
            if(groupIdOther) {
              await ClassificationService.addPropertyGroupMember(record.id, groupIdOther.id, false);
            }
          }
        }   
      }
    }
  }
  
  export async function seedPartType(data: partTypeSeedModel[]) {
    for (const partType of data) {
      const record = await ClassificationService.addPartType(partType.order, partType.name);
  
      if(record && partType.partClassPrimary) {
        const partClassPrimary = await ClassificationService.lookupPartClass(partType.partClassPrimary);
        if(partClassPrimary) {
          await ClassificationService.addPartClassMember(record.id, partClassPrimary.id, true);
        }
      }
  
      if(record && partType.partClassesOther) {
        for(const partClass of partType.partClassesOther) {
          const partClassOther = await ClassificationService.lookupPartClass(partClass);
          if(partClassOther) {
            await ClassificationService.addPartClassMember(record.id, partClassOther.id, false);
          }
        }
      }
  
      if(record && partType.propertyTypes) {
        for(const propertyType of partType.propertyTypes) {
          const propertyTypeLookup = await ClassificationService.lookupPropertyType(propertyType);
          if(propertyTypeLookup) {
            await ClassificationService.addPropertyTypeMember(record.id, propertyTypeLookup.id);
          }
        }
      }
    }
  }