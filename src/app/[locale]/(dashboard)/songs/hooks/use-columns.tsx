import type { Song } from "@/types/song";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslations } from "next-intl";

const columnHelper = createColumnHelper<Song>();

export const useColumns = () => {
  const t = useTranslations();

  return [columnHelper.accessor("title", {})];
};
