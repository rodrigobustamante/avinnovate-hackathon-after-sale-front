import { CardEvent } from "../components/events/CardEvent";
import { Title } from "../components/shared/Title";

export default function Home() {
  return (
    <section>
      <Title name={'home'}/>
      <section className="flex flex-col gap-x-5 px-5 md:flex-row md:flex-wrap md:justify-center	">
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </section>
    </section>
  );
}
