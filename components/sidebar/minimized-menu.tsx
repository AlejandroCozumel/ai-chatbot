import { SIDE_BAR_MENU } from "@/constants/menu";
import React from "react";
import { LogOut, MonitorSmartphone, Menu } from "lucide-react";
import MenuItem from "./menu-item";
import DomainMenu from "./domain-menu";

type MinMenuProps = {
  onShrink(): void;
  current: string;
  onSignOut(): void;
  domains:
    | {
        id: string;
        name: string;
        icon: string | null;
      }[]
    | null
    | undefined;
};

export const MinMenu = ({
  onShrink,
  current,
  onSignOut,
  domains,
}: MinMenuProps) => {
  return (
    <div className="p-3 flex flex-col items-center h-full">
      <span className="animate-fade-in opacity-100 delay-300 cursor-pointer">
        <Menu onClick={onShrink} className="h-6 w-6" />
      </span>
      <div className="animate-fade-in opacity-100 delay-300 flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="min" {...menu} key={key} current={current} />
          ))}
          <DomainMenu min domains={domains} />
        </div>
        <div className="flex flex-col">
          <MenuItem
            size="min"
            label="Sign out"
            icon={<LogOut className="h-4 w-4" />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="min"
            label="Mobile App"
            icon={<MonitorSmartphone className="h-4 w-4" />}
          />
        </div>
      </div>
    </div>
  );
};