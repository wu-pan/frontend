import IntlProvider from "@/providers/intl-provider";
import ThemeProvider from "@/providers/theme-provider";
import type { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => (
  <IntlProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </IntlProvider>
);

export default Providers;
