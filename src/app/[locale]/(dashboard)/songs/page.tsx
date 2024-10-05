import { useColumns } from "@/app/[locale]/(dashboard)/songs/hooks/use-columns";
import { useSongs } from "@/app/[locale]/(dashboard)/songs/hooks/use-songs";
import DataTable from "@/components/data-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

const SongsPage = () => {
  const { data = [] } = useSongs();
  const table = useReactTable({
    data,
    columns: useColumns(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <DataTable title="" table={table} />
    </div>
  );
};

export default SongsPage;
