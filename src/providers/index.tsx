import IntlProvider from "@/providers/intl-provider";
import QueryProvider from "@/providers/query-provider";
import ThemeProvider from "@/providers/theme-provider";
import type { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => (
  <IntlProvider>
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  </IntlProvider>
);

export default Providers;
