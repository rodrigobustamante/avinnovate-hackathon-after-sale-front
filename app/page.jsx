import { CardEvent } from "../components/events/CardEvent";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <section className="flex flex-col gap-x-5 px-2 md:flex-row md:flex-wrap md:justify-center	">
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </section>
    </section>
  );
}
