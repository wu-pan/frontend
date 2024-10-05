import { Album } from "@/types/album";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAlbum = (id: string) => {
  return useQuery<Album, Error>({
    queryKey: [`album/${id}`],
    queryFn: async () =>
      (await fetch(`http://localhost:8000/albums/${id}`)).json(),
  });
};

export const useAlbums = () => {
  return useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: async () => (await fetch("http://localhost:8000/albums")).json(),
  });
};

export const useCreateAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (album) =>
      await fetch("http://localhost:8000/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["albums"] });
    },
  });
};

export const useUpdateAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (album) =>
      await fetch("", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["albums"] });
    },
  });
};

export const useDeleteAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) =>
      await fetch(`http://localhost:8000/albums/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["albums"] });
    },
  });
};
