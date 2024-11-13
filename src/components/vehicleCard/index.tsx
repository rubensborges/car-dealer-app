import IconCar from '@/icons/car';
import IconEngine from '@/icons/engine';
import IconExclamation from '@/icons/exclamation';
import IconFuel from '@/icons/fuel';
import IconGear from '@/icons/gear';
import IconTire from '@/icons/tire';
import { VehicleDetails } from '@/interfaces/vehicleInterface';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import formatText from '@/utils/formatText';

type Props = {
  modelName: string | undefined;
  modelYear: number | string | undefined;
  carDetails?: VehicleDetails;
};

export default function VehicleCard({ modelName, carDetails }: Props) {
  console.log(carDetails);
  return (
    <>
      {carDetails && (
        <main className="bg-white rounded-xl shadow-md p-4 w-full">
          <section>
            <article className="text-xl font-semibold text-zinc-900">{modelName}</article>
            <section className="flex flex-col gap-4 mt-6">
              {!carDetails.details && (
                <div className="flex items-center gap-1">
                  <div className="size-6">
                    <IconExclamation />
                  </div>
                  <article>Information not founded</article>
                </div>
              )}
              {carDetails.drive && (
                <div className="flex items-center gap-1">
                  <div className="size-6">
                    <IconTire />
                  </div>
                  <article>{formatText(carDetails?.drive)}</article>
                </div>
              )}
              {carDetails?.transmission && (
                <div className="flex items-center gap-2">
                  <div className="size-6">
                    <IconGear />
                  </div>
                  <article>{formatText(carDetails.transmission)}</article>
                </div>
              )}
              {carDetails?.cylinders && (
                <div className="flex items-center gap-2">
                  <div className="size-6">
                    <IconEngine />
                  </div>
                  <article>{carDetails.cylinders}</article>
                </div>
              )}
              {carDetails?.fuel_type && (
                <div className="flex items-center gap-2">
                  <div className="size-6">
                    <IconFuel />
                  </div>
                  <article>{capitalizeFirstLetter(carDetails.fuel_type)}</article>
                </div>
              )}
              {carDetails?.class && (
                <div className="flex items-center gap-2">
                  <div className="size-6 mt-1">
                    <IconCar />
                  </div>
                  <article>{capitalizeFirstLetter(carDetails.class)}</article>
                </div>
              )}
            </section>
          </section>
        </main>
      )}
    </>
  );
}
