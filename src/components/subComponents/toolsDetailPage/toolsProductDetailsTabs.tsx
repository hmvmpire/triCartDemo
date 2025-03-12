import { FC } from "react";

interface tabsProps {
    tab?: string;
    setTab: (tab: string) => void;
    tabs: string[];
}
export const ToolsProductDetailsTabs: FC<tabsProps> = ({
    tab,
    setTab,
    tabs
}): JSX.Element => {
    
    return (
        <div className="flex items-end gap-x-10 justify-evenly sm:justify-start border-b overflow-x-auto">
            {tabs.map((item: string, index: number) => (
                <button onClick={() => setTab(item)} key={index + 1} className={`${tab === item ? "border-opacity-100 text-black" : "border-opacity-0 text-zinc-500"} border-b-2 border-black py-2 outline-none shadow-none fw_600 uppercase text-sm whitespace-nowrap`} >{item}</button>
            ))}
        </div>
    )
}