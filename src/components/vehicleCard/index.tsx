import { fetchVehicleDetails } from '@/services/vehicleServices/vehicleDetails';
import { useEffect, useState } from 'react';

type Props = {
  modelName: string;
  modelYear: number | string | undefined;
  price?: string;
};
export default function VehicleCard({ modelName, modelYear, price }: Props) {
  const [carDetails, setCarDetails] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetchVehicleDetails(modelName, modelYear);
        console.log(req);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="">
      <section></section>
      <section>
        <article>{modelName}</article>
        <article>{modelYear}</article>
        <article>{price}</article>
      </section>
    </main>
  );
}
