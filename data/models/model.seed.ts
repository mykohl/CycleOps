export type propertyTypeSeedModel = {
    order: number;
    name: string;
    valueDataType: string;
    valueDataHint: string;
    valueDataTypeModifier: string | null;
    propertyGroupPrimary: string | null;
    propertyGroupsOther: string[] | null;
  };
  
  export type partTypeSeedModel = {
    order: number;
    name: string;
    propertyTypes: string[];
    partClassPrimary: string | null;
    partClassesOther: string[] | null;
  }