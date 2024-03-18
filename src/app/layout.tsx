import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export const metadata: Metadata = {
  title: "Tool Finder | EAFIT",
  description: "A tool to find tools for teaching introductory programming",
  icons: "/icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
