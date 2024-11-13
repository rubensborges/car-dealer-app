'use client';
type Params = {
  year: string | number;
  makeId: string | number;
};

import { ResponseGetVehicleModel, VehicleModels } from '@/interfaces/vehicleInterface';
import { fetchVehicleModelsByIdAndYear } from '@/services/vehicleServices/modelsService';
import React, { useEffect, useState } from 'react';

export default function ResultPage({ params }: { params: Promise<Params> }) {
  const [vehicleModel, setVehicleModel] = useState<VehicleModels[]>([]);

  const resolvedParams = React.use(params);

  const year = resolvedParams.year;
  const id = resolvedParams.makeId;
  useEffect(() => {
    const fetchData = async () => {
      const req: ResponseGetVehicleModel = await fetchVehicleModelsByIdAndYear(id, year);
      setVehicleModel(req.Results);
    };
    fetchData();
  }, []);

  console.log(year, id);

  return (
    <div>
      {vehicleModel.map((e, index) => (
        <div key={index}>{e.Model_Name}</div>
      ))}
    </div>
  );
}
