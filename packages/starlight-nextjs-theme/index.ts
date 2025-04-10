import type { StarlightPlugin } from "@astrojs/starlight/types";

import {
  type StarlightNextjsThemeConfig,
  type StarlightNextjsThemeUserConfig,
  validateConfig,
} from "./libs/config";
import { overrideStarlightComponent } from "./libs/starlight";
import { vitePluginStarlightNextjsThemeConfig } from "./libs/vite";

export type { StarlightNextjsThemeConfig, StarlightNextjsThemeUserConfig };

export default function starlightNextjsTheme(
  userConfig?: StarlightNextjsThemeUserConfig
): StarlightPlugin {
  const config = validateConfig(userConfig);

  return {
    name: "starlight-nextjs-theme",
    hooks: {
      "config:setup"({
        config: starlightConfig,
        updateConfig,
        addIntegration,
        logger,
      }) {
        updateConfig({
          customCss: [
            ...(starlightConfig.customCss ?? []),
            "starlight-nextjs-theme/fonts/geist-mono/100.css",
            "starlight-nextjs-theme/fonts/geist-mono/200.css",
            "starlight-nextjs-theme/fonts/geist-mono/300.css",
            "starlight-nextjs-theme/fonts/geist-mono/400.css",
            "starlight-nextjs-theme/fonts/geist-mono/500.css",
            "starlight-nextjs-theme/fonts/geist-mono/600.css",
            "starlight-nextjs-theme/fonts/geist-mono/700.css",
            "starlight-nextjs-theme/fonts/geist-mono/800.css",
            "starlight-nextjs-theme/fonts/geist-mono/900.css",
            "starlight-nextjs-theme/fonts/geist-sans/100.css",
            "starlight-nextjs-theme/fonts/geist-sans/200.css",
            "starlight-nextjs-theme/fonts/geist-sans/300.css",
            "starlight-nextjs-theme/fonts/geist-sans/400.css",
            "starlight-nextjs-theme/fonts/geist-sans/500.css",
            "starlight-nextjs-theme/fonts/geist-sans/600.css",
            "starlight-nextjs-theme/fonts/geist-sans/700.css",
            "starlight-nextjs-theme/fonts/geist-sans/800.css",
            "starlight-nextjs-theme/fonts/geist-sans/900.css",
            "starlight-nextjs-theme/styles.css",
          ],
          expressiveCode:
            starlightConfig.expressiveCode === false
              ? false
              : {
                  styleOverrides: {
                    borderColor: "var(--sl-color-gray-5)",
                    borderRadius: "0.5rem",
                    frames: {
                      editorActiveTabIndicatorTopColor: "unset",
                      editorActiveTabIndicatorBottomColor:
                        "var(--sl-color-gray-3)",
                      editorTabBarBorderBottomColor: "var(--sl-color-gray-5)",
                      frameBoxShadowCssValue: "unset",
                    },
                  },
                  themes: ["vitesse-dark", "vitesse-light"],
                  ...(typeof starlightConfig.expressiveCode === "object"
                    ? starlightConfig.expressiveCode
                    : {}),
                },
          components: {
            ...starlightConfig.components,
            ...(config.breadcrumbs.enabled
              ? overrideStarlightComponent(
                  starlightConfig.components,
                  logger,
                  "PageTitle",
                  "PageTitle"
                )
              : {}),
          },
        });

        addIntegration({
          name: "starlight-nextjs-theme-integration",
          hooks: {
            "astro:config:setup": ({ updateConfig }) => {
              updateConfig({
                vite: {
                  plugins: [vitePluginStarlightNextjsThemeConfig(config)],
                },
              });
            },
          },
        });
      },
    },
  };
}
