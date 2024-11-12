'use client';
import VehicleForm from '@/components/vechileForm';
import { fetchVehicleMakes } from '@/services/vehicleService';
import { useEffect, useState } from 'react';

export default function Home() {
  const [maker, setMakers] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVehicleMakes();
      const makerNames = data.Results.map((maker: any) => maker.MakeName);
      setMakers(makerNames);
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
