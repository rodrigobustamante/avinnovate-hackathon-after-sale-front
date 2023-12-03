import { Tooltip } from "@nextui-org/react";

export const CustomTooltip = ({ children, text, placement, arrowColor, contentColor }) => {
    return (
        <Tooltip
            color='secondary'
            size='sm'
            showArrow
            placement={placement}
            content={text}
            classNames={{
                base: [
                    { arrowColor }
                ],
                content: [
                    "py-2 px-4 shadow-xl capitalize",
                    { contentColor }
                ],
            }}
        >
            {children}
        </Tooltip>
    )
}
