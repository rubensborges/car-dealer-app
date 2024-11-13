'use client';
type Params = {
  year: string | number;
  makeId: string | number;
};

import { ResponseGetVehicleModel } from '@/interfaces/vehicleInterface';
import { fetchVehicleModelsByIdAndYear } from '@/services/vehicleServices/modelsService';
import React, { useEffect } from 'react';

export default function ResultPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = React.use(params);

  const year = resolvedParams.year;
  const id = resolvedParams.makeId;
  useEffect(() => {
    const fetchData = async () => {
      const req: ResponseGetVehicleModel = await fetchVehicleModelsByIdAndYear(id, year);
      console.log(req.Results);
    };
    fetchData();
  }, []);

  console.log(year, id);

  return (
    <div>
      Year: {year}, ID: {id}
    </div>
  );
}
