import IconDownChevron from '@/app/icons/downChevron';
import IconUpChevron from '@/app/icons/upChevron';
import { useState } from 'react';
import Button from '../button';

type Props = {
  makers: string[];
};

export default function VehicleForm({ makers }: Props) {
  const [makerOption, setMakerOption] = useState<boolean>(false);
  const [yearOption, setYearOption] = useState<boolean>(false);
  const [yearSelected, setYearSelected] = useState<number>(0);
  const [makerSelected, setMakerSelected] = useState<string>('');

  const capitalizeFirstLetter = (word: string): string => {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase();
  };

  const currentYear = new Date().getFullYear();

  return (
    <form className="flex mt-6 flex-col gap-6" action="">
      {/* Car Brand Dropdown */}
      <section className="flex flex-col gap-1">
        <label className="text-white" htmlFor="">
          Select the car brand
        </label>
        <div className="flex items-center relative">
          <input
            className="rounded-lg px-2 py-1 w-full"
            type="text"
            readOnly
            value={makerSelected || ''}
            placeholder="Select..."
          />
          <div
            onClick={() => setMakerOption(!makerOption)}
            className="size-6 cursor-pointer absolute right-2"
          >
            {makerOption ? <IconDownChevron /> : <IconUpChevron />}
          </div>
        </div>
        <div
          className={`overflow-auto flex flex-col gap-2 bg-white text-black px-2 py-1 rounded-lg text-md leading-8 transition-all duration-300 ease-in-out ${
            makerOption ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {makers &&
            makers.map((maker, index) => (
              <span
                onClick={() => {
                  setMakerSelected(maker);
                  setMakerOption(!makerOption);
                }}
                className=""
                key={index}
              >
                {capitalizeFirstLetter(maker)}
              </span>
            ))}
        </div>
      </section>

      {/* Year Dropdown */}
      <section className="flex flex-col gap-1">
        <label className="text-white" htmlFor="">
          Select the year of manufacture{' '}
        </label>
        <div className="flex items-center relative">
          <input
            className="rounded-lg px-2 py-1 w-full"
            type="text"
            readOnly
            value={yearSelected || ''}
            placeholder="Select..."
          />
          <div
            onClick={() => setYearOption(!yearOption)}
            className="size-6 cursor-pointer absolute right-2"
          >
            {yearOption ? <IconDownChevron /> : <IconUpChevron />}
          </div>
        </div>
        <div
          className={`overflow-auto flex flex-col gap-2 rounded-lg bg-white text-black px-2 py-1 text-md leading-8 transition-all duration-300 ease-in-out ${
            yearOption ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i).map((year) => (
            <span
              key={year}
              className="hover:bg-zinc-200 cursor-pointer w-full px-2 py-1"
              onClick={() => {
                setYearSelected(year);
                setYearOption(false);
              }}
            >
              {year}
            </span>
          ))}
        </div>
      </section>
      <Button selectedMakeId={makerSelected} selectedYear={yearSelected} />
    </form>
  );
}
