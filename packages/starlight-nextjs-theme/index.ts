import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function starlightNextjsTheme(): StarlightPlugin {
  return {
    name: "starlight-nextjs-theme",
    hooks: {
      "config:setup"({ config: starlightConfig, updateConfig }) {
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
        });
      },
    },
  };
}
