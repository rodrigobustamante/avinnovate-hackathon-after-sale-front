import React from "react";
import SelectEvent from "../../components/events/SelectEvent";
import { CardEvent } from "../../components/events/CardEvent";

const Events = () => {
  return (
    <section>
      <h1>Follow a new event</h1>
      <SelectEvent />
      <section className="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap">
        <CardEvent />
        <CardEvent />
      </section>
    </section>
  );
};

export default Events;
