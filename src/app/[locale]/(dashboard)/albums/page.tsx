"use client";

import { useAlbums } from "@/app/[locale]/(dashboard)/albums/hooks/use-albums";
import { useColumns } from "@/app/[locale]/(dashboard)/albums/hooks/use-columns";
import DataTable from "@/components/data-table";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useTranslations } from "next-intl";

const AlbumsPage = () => {
  const t = useTranslations("albums");
  const { data = [] } = useAlbums();

  const table = useReactTable({
    data,
    columns: useColumns(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return <DataTable title={t("album")} table={table} />;
};

export default AlbumsPage;
