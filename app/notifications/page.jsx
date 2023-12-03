import { Title } from "../../components/shared/Title";
import { ContainerBox } from "../../components/shared/ContainerBox";
import NotificationList from "../../components/notifications/NotificationList";

const Notifications = () => {
  return (
    <>
      <ContainerBox css={"mb-10 md:mb-0"}>
        <div className="mr-3">
          <Title name={"notifications"} />
        </div>
        <NotificationList />
      </ContainerBox>
    </>
  );
};

export default Notifications;
