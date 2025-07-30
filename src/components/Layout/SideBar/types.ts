export type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};
