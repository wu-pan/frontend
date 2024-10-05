"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { GearIcon } from "@radix-ui/react-icons";
import { Computer, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { startTransition } from "react";

const language = {
  zh: "中文",
  en: "English",
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="pb-4">
      <div className="flex h-14 items-center justify-between">
        <div></div>
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <GearIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div>
                <ToggleGroup type="single" defaultValue={theme}>
                  <ToggleGroupItem
                    value="system"
                    onClick={() => setTheme("system")}
                  >
                    <Computer className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="light"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="dark"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {routing.locales.map((locale) => (
                <DropdownMenuItem
                  key={locale}
                  onClick={() =>
                    startTransition(() => router.replace(pathname, { locale }))
                  }
                >
                  {language[locale]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
