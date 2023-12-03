import { Spacer, Slider, Select, SelectItem, Button } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const SettingsForm = () => {
  const sliderChange = (e) => {
    const root = document.querySelector(":root");
    root.style.fontSize = `${e}px`;
  };

  return (
    <>
      <Spacer y={2} />
      <div className="flex justify-between ">
        <div>
          <label className="text-small font-semibold">COLOR-CONTRAST</label>
          <p className="text-sm text-slate-500">
            This switch allows to activate dark mode in the website
          </p>
        </div>

        <Spacer x={55} />
        <ThemeSwitcher />
      </div>

      <Spacer y={3} />
      <div className="flex w-full max-w-md flex-col">
        <label className="text-small font-semibold">RESIZE TEXT</label>
        <p className="text-sm text-slate-500">
          Move across the bar to change the size of the website
        </p>
        <Spacer y={4} />
        <Slider
          size="sm"
          step={0.1}
          showTooltip={true}
          maxValue={30}
          minValue={16}
          defaultValue={16}
          className="max-w-md"
          onChange={(e) => sliderChange(e)}
        />
      </div>

      <div className="flex w-full max-w-md flex-col">
        <label className="text-small font-semibold">LANGUAGE</label>
        <Spacer y={3} />
        <Select
          placeholder="Select a language"
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
    </>
  );
};
