import React from "react";
import SelectEvent from "../../components/events/SelectEvent";
import { CardEvent } from "../../components/events/CardEvent";
import { Title } from "../../components/shared/Title";
import { ContainerBox } from "../../components/shared/ContainerBox";

const Events = () => {
  return (
    <section>
      <Title name={"events"} />
      <h1>Follow a new event</h1>
      <SelectEvent />
      <ContainerBox css="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap">
        <CardEvent />
        <CardEvent />
      </ContainerBox>
    </section>
  );
};

export default Events;
