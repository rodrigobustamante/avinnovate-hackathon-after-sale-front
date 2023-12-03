import { Title } from "../../components/shared/Title";
import { ContainerBox } from "../../components/shared/ContainerBox";
import { NotificationCard } from "../../components/notifications/NotificationCard";
import NotificationList from "../../components/notifications/NotificationList";

const Notifications = () => {
  return (
    <>
      <Title name={"notifications"} />
      <ContainerBox>
        <NotificationList />
      </ContainerBox>
    </>
  );
};

export default Notifications;
