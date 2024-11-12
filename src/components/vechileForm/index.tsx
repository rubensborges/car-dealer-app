import IconDownChevron from '@/app/icons/downChevron';
import IconUpChevron from '@/app/icons/upChevron';
import { useState } from 'react';

export default function VehicleForm() {
  const [maker, setMaker] = useState<boolean>(false);
  const [year, setYear] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();

  return (
    <form className="flex mt-6 flex-col gap-6 text-white" action="">
      <section className="flex flex-col gap-1">
        <label htmlFor="">Select the car brand</label>
        <div className="flex items-center relative">
          <input className="rounded-lg px-2 py-1 w-full" type="text" placeholder="Select..." />
          <div onClick={() => setMaker(!maker)} className="size-6 cursor-pointer absolute right-2">
            {!maker ? <IconUpChevron /> : <IconDownChevron />}
          </div>
        </div>
        {maker && (
          <section className="bg-white text-black px-2 py-1 rounded-lg text-md leading-8">
            <div>dad</div>
          </section>
        )}
      </section>
      <section className="flex flex-col gap-1">
        <label htmlFor="">Select the year of manufacture </label>
        <div className="flex items-center relative">
          <input className="rounded-lg px-2 py-1 w-full" type="text" placeholder="Select..." />
          <div onClick={() => setYear(!year)} className="size-6 cursor-pointer absolute right-2">
            {!year ? <IconUpChevron /> : <IconDownChevron />}
          </div>
        </div>
        {year && (
          <section className="bg-white text-black px-2 py-1 rounded-lg text-md leading-8">
            {Array.from({ length: Number(currentYear) - 2014 }, (_, i) => 2015 + i).map((year) => (
              <option className="hover:bg-zinc-200 cursor-pointer w-full" key={year} value={year}>
                {year}
              </option>
            ))}
          </section>
        )}
      </section>
    </form>
  );
}
