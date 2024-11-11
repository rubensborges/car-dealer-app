import axios from "axios";

export default async function VehicleService() {
  try {
    const req = await axios.get(
      "<https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json>"
    );
    return req.data;
  } catch (error) {
    console.log(error);
  }
}
