import axios from 'axios';

export async function fetchVehicleMakes() {
  try {
    const req = await axios.get(process.env.NEXT_PUBLIC_VEHICLE_MAKES_API!);
    return req.data;
  } catch (error) {
    console.log('Error fetching vehicle makes:', error);
    return null;
  }
}
