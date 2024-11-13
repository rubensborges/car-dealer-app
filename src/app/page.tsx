'use client';
import VehicleForm from '@/components/vechileForm';
import { IVehicleForm } from '@/interfaces/vehicleInterface';
import { fetchVehicleMakes } from '@/services/vehicleService';
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
      console.log(makerData);
      setMakers(makerData);
    };

    fetchData();
  }, []);
  return (
    <main className="h-screen">
      <section className="rounded-b-[40px] bg-[#181c2a] w-full px-4 pt-4 pb-20">
        <article className="text-white text-2xl font-semibold">Explore</article>
        <VehicleForm makers={maker} />
      </section>
    </main>
  );
}
