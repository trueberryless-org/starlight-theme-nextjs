import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightNextjsTheme from "starlight-nextjs-theme";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-nextjs-theme/edit/main/docs/",
      },
      plugins: [
        starlightNextjsTheme({
          breadcrumbs: {
            enabled: true,
            maxDepth: 5,
          },
        }),
        starlightPluginsDocsComponents({
          pluginName: "starlight-nextjs-theme",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [{ slug: "getting-started" }],
        },
        {
          label: "Examples",
          autogenerate: { directory: "examples" },
        },
        {
          label: "Test",
          autogenerate: { directory: "test" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/starlight-nextjs-theme",
        },
      ],
      title: "Starlight NextJS Theme",
    }),
  ],
});
