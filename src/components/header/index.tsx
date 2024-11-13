import Link from 'next/link';

export default function Header() {
  return (
    <header className=" max-sm:hidden flex items-center gap-10 py-6 px-24 text-zinc-700 bg-white/80 w-full ">
      <main className=" text-3xl">Cars Today</main>
      <Link href={'/'}>
        <section className="hover:text-black">Home</section>
      </Link>
    </header>
  );
}
