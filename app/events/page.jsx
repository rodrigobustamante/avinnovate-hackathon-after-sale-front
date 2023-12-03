import React from "react";
import SelectEvent from "../../components/events/SelectEvent";
import { CardEvent } from "../../components/events/CardEvent";
import { Title } from "../../components/shared/Title";
import { ContainerBox } from "../../components/shared/ContainerBox";

const Events = () => {
  return (
    <div className="px-0">
      <Title name={"events"} />
      <h1 className="mb-3 text-slate-700	">Follow a new event</h1>
      <SelectEvent />
      <ContainerBox
        css="flex flex-col items-center gap-x-2 md:flex-row md:flex-wrap mb-10 md:mb-0"
        px="px-0"
      >
        <CardEvent name={'The Eras Tour'} image={'/images/taylor-placeholder.png'} description={'A night of unforgettable music and dynamic stage presence that defines the essence of a Taylor Swift live performance.'} date={'June 5th 2023'} />
        <CardEvent name={'Lollapaloza 2024'} image={'/images/lolla.jpg'} date={''} description={'The ultimate music festival experience, where a diverse lineup of world-class artists creates an electrifying atmosphere of non-stop music.'} />
        <CardEvent name={'Metallica tour'} image={'/images/metallica.jpg'} date={''} description={'Brace yourself for an unforgettable night of headbanging and musical mastery that defines the essence of a Metallica live experience.'} />
        <CardEvent name={'Coldplay tour'} image={'/images/coldplay.jpg'} date={''} description={'Surrender to the enchanting sounds and uplifting vibes that encapsulate the essence of a Coldplay live performance. See you there'} />
      </ContainerBox>
    </div>
  );
};

export default Events;
