"use client";

import { CommandIcon, Moon, Sun, FileText, Briefcase, GraduationCap, Code, FolderOpen, Printer, ExternalLink } from "lucide-react";
import * as React from "react";
import Fuse from "fuse.js";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

interface Props {
  links: { url: string; title: string }[];
}

interface CommandItemType {
  id: string;
  title: string;
  icon?: React.ReactNode;
  keywords?: string[];
  onSelect: () => void;
  group: string;
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { theme, setTheme } = useTheme();
  const isMac: boolean =
    typeof window !== "undefined"
      ? window.navigator.userAgent.indexOf("Mac") > -1
      : false;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      // Add additional shortcuts
      if (e.key === "p" && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
        e.preventDefault();
        window.print();
      }
      if (e.key === "d" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [theme, setTheme]);

  // Define all command items
  const commandItems: CommandItemType[] = [
    // Actions
    {
      id: "print",
      title: "Print Resume",
      icon: <Printer className="mr-2 size-4" />,
      keywords: ["print", "pdf", "export", "save"],
      onSelect: () => {
        setOpen(false);
        window.print();
      },
      group: "Actions",
    },
    {
      id: "toggle-theme",
      title: `Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`,
      icon: theme === "dark" ? <Sun className="mr-2 size-4" /> : <Moon className="mr-2 size-4" />,
      keywords: ["theme", "dark", "light", "mode", "toggle", "appearance"],
      onSelect: () => {
        setOpen(false);
        setTheme(theme === "dark" ? "light" : "dark");
      },
      group: "Actions",
    },
    // Navigation
    {
      id: "nav-summary",
      title: "Jump to Summary",
      icon: <FileText className="mr-2 size-4" />,
      keywords: ["summary", "about", "jump", "navigate", "section"],
      onSelect: () => {
        setOpen(false);
        document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
      },
      group: "Navigation",
    },
    {
      id: "nav-work",
      title: "Jump to Work Experience",
      icon: <Briefcase className="mr-2 size-4" />,
      keywords: ["work", "experience", "jobs", "career", "employment", "jump", "navigate"],
      onSelect: () => {
        setOpen(false);
        document.getElementById("work-experience")?.scrollIntoView({ behavior: "smooth" });
      },
      group: "Navigation",
    },
    {
      id: "nav-education",
      title: "Jump to Education",
      icon: <GraduationCap className="mr-2 size-4" />,
      keywords: ["education", "school", "degree", "jump", "navigate"],
      onSelect: () => {
        setOpen(false);
        document.getElementById("education-section")?.scrollIntoView({ behavior: "smooth" });
      },
      group: "Navigation",
    },
    {
      id: "nav-skills",
      title: "Jump to Skills",
      icon: <Code className="mr-2 size-4" />,
      keywords: ["skills", "technologies", "abilities", "jump", "navigate"],
      onSelect: () => {
        setOpen(false);
        document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" });
      },
      group: "Navigation",
    },
    {
      id: "nav-projects",
      title: "Jump to Projects",
      icon: <FolderOpen className="mr-2 size-4" />,
      keywords: ["projects", "portfolio", "work", "jump", "navigate", "side"],
      onSelect: () => {
        setOpen(false);
        document.getElementById("side-projects")?.scrollIntoView({ behavior: "smooth" });
      },
      group: "Navigation",
    },
    // Links
    ...links.map((link) => ({
      id: `link-${link.url}`,
      title: `Open ${link.title}`,
      icon: <ExternalLink className="mr-2 size-4" />,
      keywords: [link.title.toLowerCase(), "open", "link", "external", "website"],
      onSelect: () => {
        setOpen(false);
        window.open(link.url, "_blank");
      },
      group: "Links",
    })),
  ];

  // Setup fuzzy search
  const fuse = React.useMemo(() => {
    return new Fuse(commandItems, {
      keys: ["title", "keywords"],
      threshold: 0.3,
      includeScore: true,
    });
  }, [commandItems]);

  // Filter items based on search
  const filteredItems = React.useMemo(() => {
    if (!search.trim()) return commandItems;
    return fuse.search(search).map((result) => result.item);
  }, [search, fuse, commandItems]);

  // Group filtered items
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, CommandItemType[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.group]) {
        groups[item.group] = [];
      }
      groups[item.group].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground xl:block print:hidden dark:bg-gray-900 dark:border-t-gray-800 dark:text-gray-400">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>+J
        </kbd>{" "}
        for commands •{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>+P
        </kbd>{" "}
        to print •{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>+⇧+D
        </kbd>{" "}
        for dark mode
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
        aria-label="Open command menu"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Type a command or search..." 
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found. Try a different search.</CommandEmpty>
          {Object.entries(groupedItems).map(([groupName, items]) => (
            <React.Fragment key={groupName}>
              <CommandGroup heading={groupName}>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={item.onSelect}
                    value={item.title}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
