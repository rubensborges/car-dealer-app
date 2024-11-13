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
