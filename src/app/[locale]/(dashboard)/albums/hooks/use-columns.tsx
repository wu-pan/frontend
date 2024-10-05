import { useDeleteAlbum } from "@/app/[locale]/(dashboard)/albums/hooks/use-albums";
import DataTableActions from "@/components/data-table-actions";
import type { Album } from "@/types/album";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const columnHelper = createColumnHelper<Album>();

export const useColumns = () => {
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("albums");
  const deleteAlbum = useDeleteAlbum();

  return [
    columnHelper.accessor("title", { header: () => t("title") }),
    columnHelper.display({
      header: t("actions"),
      cell: ({ row }) => (
        <DataTableActions
          row={row}
          onEdit={(row) => router.push(`${path}/${row.original.id}`)}
          onDelete={(row) => deleteAlbum.mutate(row.original.id)}
        />
      ),
    }),
  ];
};
