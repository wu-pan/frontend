import type { Song } from "@/types/song";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSongs = () => {
  return useQuery<Song[], Error>({
    queryKey: ["songs"],
    queryFn: async () => (await fetch("http://localhost:8000/songs")).json(),
  });
};

export const useCreateSong = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (album) =>
      await fetch("http://localhost:8000/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
    },
  });
};

export const useUpdateSong = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (album) =>
      await fetch("http://localhost:8000/songs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
    },
  });
};

export const useDeleteSong = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) =>
      await fetch(`http://localhost:8000/songs/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
    },
  });
};
