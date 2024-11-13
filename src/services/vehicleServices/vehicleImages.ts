import axios from 'axios';

export async function fetchVehicleImages(name: string) {
  const req = await axios.get(`https://www.googleapis.com/customsearch/v1?${name}`);
  return req.data;
}
