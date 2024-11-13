import axios from 'axios';

export async function fetchVehicleModelsByIdAndYear(id: number | string, year: number | string) {
  const url = process.env
    .NEXT_PUBLIC_VEHICLE_MODELS_API!.replace('{makeId}', id.toString())
    .replace('{year}', year.toString());

  const req = await axios.get(url);
  return req.data;
}
