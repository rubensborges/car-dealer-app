'use client';
type Params = {
  year: string | number;
  makeId: string | number;
};

import Loader from '@/components/loader';
import { ResponseGetVehicleModel, VehicleModels } from '@/interfaces/vehicleInterface';
import { fetchVehicleModelsByIdAndYear } from '@/services/vehicleServices/modelsService';
import React, { Suspense, useEffect, useState } from 'react';

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

  return (
    <div>
      {vehicleModel.map((vehicle, index) => (
        <Suspense key={index} fallback={<Loader />}>
          <div key={index}>{vehicle.Model_Name}</div>
        </Suspense>
      ))}
    </div>
  );
}
