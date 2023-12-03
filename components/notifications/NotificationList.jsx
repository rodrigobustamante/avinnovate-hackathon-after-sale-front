import React from "react";
import { NotificationCard } from "./NotificationCard";
import { timeStamp } from "console";

async function getData() {
  const res = await fetch(
    "https://hackathon-avinnovate-6hriu.ondigitalocean.app/notifications",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const NotificationList = async () => {
  const { notifications } = await getData();

  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          title={notification.title}
          date={notification.timestamp}
          isOpen={true}
          text={notification.description}
        />
      ))}
    </>
  );
};

export default NotificationList;
