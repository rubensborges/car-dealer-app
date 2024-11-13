type Props = {
  modelName?: string;
  modelYear?: number;
  price?: string;
  image?: string | undefined;
};
export default function VehicleCard({ modelName, modelYear, price }: Props) {
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
