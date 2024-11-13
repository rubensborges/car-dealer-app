import Link from 'next/link';

type Props = {
  selectedMakeId: number | null;
  selectedYear: number | null;
};
export default function Button({ selectedMakeId, selectedYear }: Props) {
  return (
    <Link href={`result/${selectedMakeId}/${selectedYear}`} passHref>
      <button
        disabled={!selectedMakeId || !selectedYear}
        className={` ${
          selectedMakeId && selectedYear
            ? 'bg-[#9a9a9a] text-white'
            : 'bg-[#9a9a9a9a] text-white/30'
        } p-2 w-full  rounded-lg hover:bg-[#9a9a9a9a]  text-xl font-semibold text-center`}
      >
        Next
      </button>
    </Link>
  );
}
