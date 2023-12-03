import React from "react";
import SelectEventWrapper from "./SelectEventWrapper";

async function getData() {
  const res = await fetch(
    "https://hackathon-avinnovate-6hriu.ondigitalocean.app/events",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SelectEvent = async () => {
  const { events } = await getData();

  return <SelectEventWrapper events={events} />;
};

export default SelectEvent;
