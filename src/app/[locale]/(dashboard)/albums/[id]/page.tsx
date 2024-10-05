"use client";

import { useAlbum } from "@/app/[locale]/(dashboard)/albums/hooks/use-albums";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";

interface EditAlbumProps {
  params: { id: string };
}

const EditAlbum = ({ params: { id } }: EditAlbumProps) => {
  const { data, isLoading, isError } = useAlbum(id);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (isError || !data) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold"></h1>
      <p>{data.title}</p>
    </div>
  );
};

export default EditAlbum;
