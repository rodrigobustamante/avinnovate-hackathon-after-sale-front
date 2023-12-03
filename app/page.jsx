import { ContainerBox } from "../components/shared/ContainerBox";
import { SimpleCard } from "../components/shared/SimpleCard";
import { Subtitle } from "../components/shared/Subtitle";
import { Greeting } from "../components/home/Greeting"

export default function Home() {
  return (
    <>
      <ContainerBox css={'flex justify-center mb-10 md:mb-0'}>
        <div>
          <Greeting />
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
                title="Lollapaloza 2024"
                subTitle="Stream the TS event"
                srcImg="/images/lolls.png"
              />
              <SimpleCard
                keyIndex="1"
                title="Metallica tour"
                subTitle="Stream the TS event"
                srcImg="/images/metallica.jpg"
              />
              <SimpleCard
                keyIndex="1"
                title="Coldplay tour"
                subTitle="Stream the TS event"
                srcImg="/images/coldplay.jpg"
              />
            </div>
          </section>
          <section id="section-2">
            <Subtitle name={'Merch you would love 💖'} />
            <div id="cards-2" className="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap ">
              <SimpleCard
                keyIndex="1"
                title="Taylor's bracelet"
                subTitle="Stream the TS event"
                srcImg="/images/bracelet.png"
              />
              <SimpleCard
                keyIndex="1"
                title="BlackPink wand"
                subTitle="Stream the TS event"
                srcImg="/images/blackpinkwnd.png"
              />
              <SimpleCard
                keyIndex="1"
                title="Lollapaloza Official Merch"
                subTitle="Stream the TS event"
                srcImg="/images/lollamerch.png"
              />
              <SimpleCard
                keyIndex="1"
                title="Film Festival Merch"
                subTitle="Stream the TS event"
                srcImg="/images/merch.jpg"
              />
            </div>
          </section>
          <section id="section-3">
            <Subtitle name={'Maybe you need ... 🤔'} />
            <div id="cards-3" className="flex flex-col items-center gap-x-5 px-2 md:flex-row md:flex-wrap ">
              <SimpleCard
                keyIndex="1"
                title="Transport"
                subTitle="Stream the TS event"
                srcImg="/images/bus.png"
              />
              <SimpleCard
                keyIndex="1"
                title="Accommodation"
                subTitle="Stream the TS event"
                srcImg="/images/acomodation.png"
              />
              <SimpleCard
                keyIndex="1"
                title="Rent a bike"
                subTitle="Stream the TS event"
                srcImg="/images/bike.jpg"
              />
              <SimpleCard
                keyIndex="1"
                title="Bike parking"
                subTitle="Stream the TS event"
                srcImg="/images/bike2.jpg"
              />
            </div>
          </section>
        </div>
      </ContainerBox>
    </>
  );
}
