import { Title } from "../components/shared/Title";
import { ContainerBox } from "../components/shared/ContainerBox";
import { SimpleCard } from "../components/shared/SimpleCard";
import { Spacer } from "@nextui-org/react";
import { Subtitle } from "../components/shared/Subtitle";


export default function Home() {
  return (
    <>
      
      <ContainerBox css={'flex justify-center'}>
        <div>
          <Title name={'Welcome again, User!'} />
        <section id="section-1" >
          <Subtitle name={'Upcoming events 😎'} />
          <div id="cards-1" className="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap ">
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="/images/taylor-placeholder.png"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>
        <section id="section-2">
          <Subtitle name={'Merch you would love 💖'} />
          <div id="cards-2" className="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap ">
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="/images/taylor-placeholder.png"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>
        <section id="section-3">
          <Subtitle name={'Maybe you need ... 🤔'} />
          <div id="cards-3" className="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap ">
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="/images/taylor-placeholder.png"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SimpleCard
              keyIndex="1"
              title="Taylor Swift"
              subTitle="Stream the TS event"
              srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>
        </div>
      </ContainerBox>
    </>
  );
}
