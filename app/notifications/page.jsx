import { Title } from "../../components/shared/Title";
import { ContainerBox } from "../../components/shared/ContainerBox";
import { NotificationCard } from "../../components/notifications/NotificationCard";

const Notifications = () => {
  return (
    <>
      <Title name={'notifications'} />
      <ContainerBox>
        <NotificationCard title={'THE ERAS TOUR: TAYLOR SWIFT'} isOpen={true} text={'It’s hot outside 😎 here you have...'} />
        <NotificationCard title={'THE ERAS TOUR: TAYLOR SWIFT'} isOpen={true} text={'It’s hot outside 😎 here you have...'} />
        <NotificationCard title={'THE ERAS TOUR: TAYLOR SWIFT'} isOpen={true} text={'It’s hot outside 😎 here you have...'} />
        <NotificationCard title={'THE ERAS TOUR: TAYLOR SWIFT'} isOpen={true} text={'It’s hot outside 😎 here you have...'} />
        <NotificationCard title={'THE ERAS TOUR: TAYLOR SWIFT'} isOpen={true} text={'It’s hot outside 😎 here you have...'} />
        <NotificationCard title={'THE ERAS TOUR: TAYLOR SWIFT'} isOpen={true} text={'It’s hot outside 😎 here you have...'} />
        </ContainerBox>
    </>
  );
};

export default Notifications;
