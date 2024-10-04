import IntlProvider from "@/providers/intl-provider";
import type { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => (
  <IntlProvider>{children}</IntlProvider>
);

export default Providers;
