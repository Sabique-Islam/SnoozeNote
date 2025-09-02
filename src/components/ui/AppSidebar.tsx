"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    ChevronUp
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationItems, type NavigationItem } from "@/data/mock";

interface AppSidebarProps {
    className?: string;
}

export function AppSidebar({ className }: AppSidebarProps) {
    const pathname = usePathname();

    const isActiveRoute = (url: string) => {
        return pathname === url;
    };

    return (
        <Sidebar collapsible="icon" className={className}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="flex items-center gap-2">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-teal-700 text-white">
                                <Image
                                    src="/assets/icon.svg"
                                    alt="SnoozeNote"
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">SnoozeNote</span>
                                <span className="truncate text-xs">Track your Dreams</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationItems.map((item: NavigationItem) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                                        <Link href={item.url} className="flex items-center gap-2">
                                            <item.icon className="size-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="flex items-center gap-3 data-[state=open]:bg-sidebar-accent">
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-8 h-8",
                                        userButtonTrigger: "focus:shadow-none"
                                    }
                                }}
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Profile</span>
                                <span className="text-xs text-sidebar-foreground/70">Manage account</span>
                            </div>
                            <ChevronUp className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
