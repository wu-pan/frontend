import { useAtom } from "jotai/react";
import { atomWithStorage } from "jotai/utils";

const configAtom = atomWithStorage("config", {
  style: "default",
  theme: "zine",
});

export const useConfig = () => useAtom(configAtom);
