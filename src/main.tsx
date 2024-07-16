import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { themeOptions } from "@/lib/theme.ts";
import { routeTree } from "@/routeTree.gen.ts";

const theme = createTheme(themeOptions);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
