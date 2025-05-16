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
        starlightNextjsTheme(),
        starlightPluginsDocsComponents({
          pluginName: "starlight-nextjs-theme",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "customization"],
        },
        {
          label: "Examples",
          autogenerate: { directory: "examples" },
        },
      ],
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/trueberryless.org",
        },
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
