import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function starlightNextjsTheme(): StarlightPlugin {
  return {
    name: "starlight-theme-next",
    hooks: {
      "config:setup"({ config, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true
            ? {}
            : config.expressiveCode;

        updateConfig({
          customCss: [
            ...(config.customCss ?? []),
            "starlight-theme-next/fonts/geist-mono/100.css",
            "starlight-theme-next/fonts/geist-mono/200.css",
            "starlight-theme-next/fonts/geist-mono/300.css",
            "starlight-theme-next/fonts/geist-mono/400.css",
            "starlight-theme-next/fonts/geist-mono/500.css",
            "starlight-theme-next/fonts/geist-mono/600.css",
            "starlight-theme-next/fonts/geist-mono/700.css",
            "starlight-theme-next/fonts/geist-mono/800.css",
            "starlight-theme-next/fonts/geist-mono/900.css",
            "starlight-theme-next/fonts/geist-sans/100.css",
            "starlight-theme-next/fonts/geist-sans/200.css",
            "starlight-theme-next/fonts/geist-sans/300.css",
            "starlight-theme-next/fonts/geist-sans/400.css",
            "starlight-theme-next/fonts/geist-sans/500.css",
            "starlight-theme-next/fonts/geist-sans/600.css",
            "starlight-theme-next/fonts/geist-sans/700.css",
            "starlight-theme-next/fonts/geist-sans/800.css",
            "starlight-theme-next/fonts/geist-sans/900.css",
            "starlight-theme-next/styles.css",
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ["vitesse-dark", "vitesse-light"],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    borderColor: "var(--sl-color-gray-5)",
                    borderRadius: "0.5rem",
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorActiveTabIndicatorTopColor: "unset",
                      editorActiveTabIndicatorBottomColor:
                        "var(--sl-color-gray-3)",
                      editorTabBarBorderBottomColor: "var(--sl-color-gray-5)",
                      frameBoxShadowCssValue: "unset",
                      ...userExpressiveCodeConfig.styleOverrides?.frames,
                    },
                  },
                },
        });
      },
    },
  };
}
