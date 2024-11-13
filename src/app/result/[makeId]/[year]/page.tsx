'use client';
type Params = {
  year: string | number;
  makeId: string | number;
};

import ErrorMessage from '@/components/errorMessage';
import Loader from '@/components/loader';
import VehicleCard from '@/components/vehicleCard';
import IconLeftCheveon from '@/icons/leftChevron';
import { ResponseGetVehicleModel, VehicleModels } from '@/interfaces/vehicleInterface';
import { fetchVehicleModelsByIdAndYear } from '@/services/vehicleServices/modelsService';
import Link from 'next/link';
import React, { lazy, Suspense, useEffect, useState } from 'react';

export default function ResultPage({ params }: { params: Promise<Params> }) {
  const [vehicleModel, setVehicleModel] = useState<VehicleModels[]>([]);
  const [error, setError] = useState(false);

  const resolvedParams = React.use(params);

  const ErrorMessage = lazy(() => import('@/components/errorMessage'));

  const year = resolvedParams.year;
  const id = resolvedParams.makeId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req: ResponseGetVehicleModel = await fetchVehicleModelsByIdAndYear(id, year);
        if (req.Results.length === 0) {
          setError(true);
          return;
        }
        setVehicleModel(req.Results);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-zinc-200 vh-[100] max-w-[600px] mx-auto rounded-b-[40px] px-4 pt-4 pb-20 ">
      <Link href={'/'}>
        <div className="size-10 hover:bg-slate-600/80 rounded-lg p-2 bg-slate-600/30">
          <IconLeftCheveon />
        </div>
      </Link>
      <div className="mt-10 mx-auto flex items-center flex-col h-full">
        <Suspense fallback={<Loader />}>
          {vehicleModel.map(async (vehicle, index) => (
            <VehicleCard key={index} modelName={vehicle.Model_Name} />
          ))}
        </Suspense>
      </div>
      <Suspense fallback={<Loader />}>{error && <ErrorMessage />}</Suspense>
    </div>
  );
}
