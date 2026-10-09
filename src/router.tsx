import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Trailing Slashes beibehalten statt umzuleiten, damit der statische
    // Prerenderer /impressum/ direkt mit 200 beantwortet bekommt.
    trailingSlash: "preserve",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
