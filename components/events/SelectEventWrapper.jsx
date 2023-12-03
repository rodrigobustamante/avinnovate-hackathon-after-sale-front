"use client";
import { Select, SelectItem } from "@nextui-org/react";
import AddButton from "../shared/AddButton";
import { useState } from "react";

const SelectEventWrapper = ({ events }) => {
  const [value, setValue] = useState(new Set([]));

  const handleClick = () => {
    console.log(value);
  };

  return (
    <div className="flex items-center gap-4">
      <Select
        items={events}
        label="Select an event"
        className="max-w-sm"
        selectedKeys={value}
        onSelectionChange={setValue}
      >
        {(event) => <SelectItem key={event.id}>{event.artist}</SelectItem>}
      </Select>
      <AddButton text="Add" onClick={handleClick} />
    </div>
  );
};

export default SelectEventWrapper;
