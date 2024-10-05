import { usePathname, useRouter } from "@/i18n/routing";

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
};
