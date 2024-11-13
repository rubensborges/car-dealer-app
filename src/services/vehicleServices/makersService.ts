import axios from 'axios';

export async function fetchVehicleMakes() {
  try {
    const req = await axios.get(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    );
    return req.data;
  } catch (error) {
    console.log('Error fetching vehicle makes:', error);
    return null;
  }
}
