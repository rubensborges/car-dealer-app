import axios from 'axios';

export async function fetchVehicleDetails(
  name: string | undefined,
  year: number | undefined | string
) {
  const API_KEY = 'wZ3zgHoSA/bMHQreqMVbpw==wvc2MUBdgVWguRlB';
  const req = await axios.get(
    `https://api.api-ninjas.com/v1/cars?&model=${name}&limit=1&year=${year}`,
    {
      headers: {
        'X-Api-Key': API_KEY,
      },
    }
  );

  return req.data[0];
}
