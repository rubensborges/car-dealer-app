'use client';
import VehicleForm from '@/components/vechileForm';
import { IVehicleForm } from '@/interfaces/vehicleInterface';
import { fetchVehicleMakes } from '@/services/vehicleServices/makersService';
import { useEffect, useState } from 'react';

export default function Home() {
  const [maker, setMakers] = useState<IVehicleForm[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVehicleMakes();
      const makerData = data.Results.map((maker: IVehicleForm) => ({
        MakeId: maker.MakeId,
        MakeName: maker.MakeName,
      }));

      setMakers(makerData);
    };

    fetchData();
  }, []);
  return (
    <main className="h-screen">
      <div className="bg-[#181c2a] rounded-b-[40px] px-4 pt-4 pb-20 ">
        <section className="max-w-[600px] mx-auto ">
          <article className="text-white text-2xl font-semibold">Explore</article>
          <VehicleForm makers={maker} />
        </section>
      </div>
    </main>
  );
}
