import Link from 'next/link';

type Props = {
  selectedMakeId: string | null;
  selectedYear: number | null;
};
export default function Button({ selectedMakeId, selectedYear }: Props) {
  return (
    <Link href={`result/${selectedMakeId}/${selectedYear}`} passHref>
      <button
        disabled={!selectedMakeId || !selectedYear}
        className="p-2 g-[#9a9a9a] rounded-lg hover:bg-[#9a9a9a9a] text-white text-xl font-semibold text-center"
      >
        Next
      </button>
    </Link>
  );
}
