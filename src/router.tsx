import { QueryClient } from "@tanstack/react-query";
import { createRouter, createMemoryHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Im Browser Memory-History nutzen: Da die Website eine reine Einzelseite ist,
    // bleibt der Router intern immer auf "/". So läuft die Seite in jedem beliebigen
    // Unterverzeichnis (/chor/, /unterordner/, /index.html) ohne 404-Fehler.
    history:
      typeof window !== "undefined"
        ? createMemoryHistory({ initialEntries: ["/"] })
        : undefined,
    scrollRestoration: true,
    trailingSlash: "preserve",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
