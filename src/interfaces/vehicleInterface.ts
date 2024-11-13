export interface IVehicleForm {
  MakeId: number;
  MakeName: string;
}

export interface VehicleModels {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface ResponseGetVehicleModel {
  Results: VehicleModels[];
}

export interface VehicleDetails {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: 'rwd' | 'fwd' | 'awd';
  fuel_type: 'gas' | 'diesel' | 'electric' | 'hybrid';
  highway_mpg: number;
  make: string;
  model: string;
  transmission: 'a' | 'm';
  year: number;
}
