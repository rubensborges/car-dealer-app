import axios from 'axios';

export async function fetchVehicleModelsByIdAndYear(id: number | string, year: number | string) {
  const req = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${id}/modelyear/${year}?format=json`
  );
  return req.data;
}
