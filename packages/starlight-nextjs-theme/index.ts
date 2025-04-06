import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function starlightNextjsTheme(): StarlightPlugin {
  return {
    name: "starlight-nextjs-theme",
    hooks: {
      "config:setup"({ config: starlightConfig, updateConfig }) {
        updateConfig({
          customCss: [
            ...(starlightConfig.customCss ?? []),
            "@fontsource/geist-mono/100.css",
            "@fontsource/geist-mono/200.css",
            "@fontsource/geist-mono/300.css",
            "@fontsource/geist-mono/400.css",
            "@fontsource/geist-mono/500.css",
            "@fontsource/geist-mono/600.css",
            "@fontsource/geist-mono/700.css",
            "@fontsource/geist-mono/800.css",
            "@fontsource/geist-mono/900.css",
            "@fontsource/geist-sans/100.css",
            "@fontsource/geist-sans/200.css",
            "@fontsource/geist-sans/300.css",
            "@fontsource/geist-sans/400.css",
            "@fontsource/geist-sans/500.css",
            "@fontsource/geist-sans/600.css",
            "@fontsource/geist-sans/700.css",
            "@fontsource/geist-sans/800.css",
            "@fontsource/geist-sans/900.css",
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
                      editorActiveTabIndicatorBottomColor: "var(--sl-color-gray-3)",
                      editorTabBarBorderBottomColor: "var(--sl-color-gray-5)",
                      frameBoxShadowCssValue: "unset",
                    },
                  },
                  themes: ["vitesse-dark", "vitesse-light"],
                  ...(typeof starlightConfig.expressiveCode === "object" ? starlightConfig.expressiveCode : {}),
                },
        });
      },
    },
  };
}
