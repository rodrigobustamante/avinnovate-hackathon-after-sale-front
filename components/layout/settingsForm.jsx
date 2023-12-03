import { Spacer, Slider, Select, SelectItem, Button } from "@nextui-org/react";
import { CustomSwitch } from "../shared/CustomSwitch";

export const SettingsForm = () => {
  return (
    <>
      <Spacer y={2} />
      <div className="flex flex-wrap gap-6 md:flex-nowrap">
        <label className="text-small font-semibold">COLOR-CONTRAST</label>
        <Spacer x={55} />
        <CustomSwitch />
      </div>
      <Spacer y={3} />
      <div className="flex w-full max-w-md flex-col">
        <label className="text-small font-semibold">RESIZE TEXT</label>
        <Spacer y={4} />
        <Slider
          size="sm"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Temperature"
          defaultValue={0.2}
          className="max-w-md"
        />
      </div>
      <div className="flex w-full max-w-md flex-col">
        <label className="text-small font-semibold">LANGUAGE</label>
        <Spacer y={3} />
        <Select
          placeholder="Select an languaje"
          labelPlacement="outside"
          className="max-w-xs"
          disableSelectorIconRotation
        >
          <SelectItem key="1" value="Español">
            Español
          </SelectItem>
          <SelectItem key="2" value="Ingles">
            Ingles
          </SelectItem>
          <SelectItem key="3" value="Frances">
            Frances
          </SelectItem>
        </Select>
      </div>
      <Spacer y={3} />
      <Button color="primary">SAVE CHANGES</Button>
    </>
  );
};