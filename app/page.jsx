import { ContainerBox } from "../components/shared/ContainerBox";
import { SimpleCard } from "../components/shared/SimpleCard";
import Greeting from "../components/home/Greeting";

export default function Home() {
  return (
    <>
      <Greeting />
      <ContainerBox>
        <SimpleCard
          keyIndex="1"
          title="Taylor Swift"
          subTitle="Stream the TS event"
          srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cardType="large"
        />
      </ContainerBox>
    </>
  );
}
