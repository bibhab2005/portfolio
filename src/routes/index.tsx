import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
  head: () => ({
    meta: [
      { title: "Bibhab Talukdar | Portfolio" },
      { name: "description", content: "Portfolio of full-stack engineer Bibhab Talukdar." },
      { property: "og:title", content: "Bibhab Talukdar | Portfolio" },
      {
        property: "og:description",
        content: "Full-stack engineering portfolio and professional profile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
