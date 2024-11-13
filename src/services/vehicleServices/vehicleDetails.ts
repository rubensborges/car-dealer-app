import axios from 'axios';

export async function fetchVehicleDetails(
  name: string | undefined,
  year: number | undefined | string
) {
  const API_KEY = 'wZ3zgHoSA/bMHQreqMVbpw==wvc2MUBdgVWguRlB';

  const url = process.env
    .NEXT_PUBLIC_VEHICLE_DETAILS_API!.replace('{name}', name || '')
    .replace('{year}', year?.toString() || '');

  const req = await axios.get(url, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });

  return req.data[0];
}
