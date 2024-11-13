'use client';
import ErrorMessage from '@/components/errorMessage';
import Loader from '@/components/loader';
import VehicleCard from '@/components/vehicleCard';
import IconLeftCheveon from '@/icons/leftChevron';
import { ResponseGetVehicleModel, VehicleDetails } from '@/interfaces/vehicleInterface';
import { fetchVehicleModelsByIdAndYear } from '@/services/vehicleServices/modelsService';
import { fetchVehicleDetails } from '@/services/vehicleServices/vehicleDetails';
import Link from 'next/link';
import React, { lazy, Suspense, useEffect, useState } from 'react';

type Params = {
  year: string | number;
  makeId: string | number;
};

export default function ResultPage({ params }: { params: Promise<Params> }) {
  const [vehicleDetails, setVehicleDetails] = useState<(VehicleDetails | undefined)[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const resolvedParams = React.use(params);
  const year = resolvedParams.year;
  const id = resolvedParams.makeId;

  useEffect(() => {
    const fetchAllVehicleDetails = async () => {
      try {
        const req: ResponseGetVehicleModel = await fetchVehicleModelsByIdAndYear(id, year);
        if (req.Results.length === 0) {
          setError(true);
          setLoading(false);
          return;
        }

        const detailsPromises = req.Results.map(async (vehicle) => {
          const modelName = vehicle.Model_Name;
          const makeName = vehicle.Make_Name;
          const details = await fetchVehicleDetails(modelName, year);
          return details ? { ...details, model: modelName, make: makeName } : undefined;
        });

        const details = await Promise.all(detailsPromises);
        setVehicleDetails(details);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchAllVehicleDetails();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="vh-[100] max-w-[600px] mx-auto rounded-b-[40px] px-4 pt-4 pb-20">
      <Suspense fallback={<Loader />}>
        <Link href={'/'}>
          <div className="size-10 hover:bg-slate-600/80 rounded-lg p-2 bg-slate-600/30">
            <IconLeftCheveon />
          </div>
        </Link>
        {!error && (
          <article className="md:text-xl text-md font-semibold text-center mt-8">
            Showing all {vehicleDetails[0]?.make || ''} models from the year {year}
          </article>
        )}
        <div className="mt-5 mx-auto max-h-[70vh] overflow-auto gap-4 flex items-center flex-col h-full">
          {vehicleDetails.map((details, index) => (
            <VehicleCard
              key={index}
              modelYear={year}
              modelName={details?.model}
              carDetails={details}
            />
          ))}
        </div>
      </Suspense>
      {error && <ErrorMessage />}
    </div>
  );
}
