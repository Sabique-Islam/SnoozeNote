import {
  Home,
  FileText,
  Calendar,
  Bell,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "My Dreams",
    url: "/dreams",
    icon: FileText,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Reminders",
    url: "/reminders",
    icon: Bell,
  },
];
