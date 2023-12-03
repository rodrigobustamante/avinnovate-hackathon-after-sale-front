import React from "react";
import SelectEvent from "../../components/events/SelectEvent";
import { CardEvent } from "../../components/events/CardEvent";
import { Title } from "../../components/shared/Title";
import { ContainerBox } from "../../components/shared/ContainerBox";

const Events = () => {
  return (
    <div className="px-0">
      <Title name={"events"} />
      <h1>Follow a new event</h1>
      <SelectEvent />
      <ContainerBox
        css="flex flex-col items-center gap-x-5 md:flex-row md:flex-wrap"
        px="px-0"
      >
        <CardEvent name={'The Eras Tour'} image={'/images/taylor-placeholder.png'} description={'Immerse yourself in a night of unforgettable music and dynamic stage presence that defines the essence of a Taylor Swift live performance.'} />
        <CardEvent />
      </ContainerBox>
    </div>
  );
};

export default Events;
