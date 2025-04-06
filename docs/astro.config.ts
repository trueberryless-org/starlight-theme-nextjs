import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightNextjsTheme from "starlight-nextjs-theme";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: "https://github.com/trueberryless-org/starlight-nextjs-theme/edit/main/docs/",
      },
      plugins: [
        starlightNextjsTheme(),
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
      ],
      social: {
        github: "https://github.com/trueberryless-org/starlight-nextjs-theme",
      },
      title: "Starlight NextJS Theme",
    }),
  ],
});
