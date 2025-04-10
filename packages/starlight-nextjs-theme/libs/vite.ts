import type { ViteUserConfig } from "astro";

import type { StarlightNextjsThemeConfig } from "..";

export function vitePluginStarlightNextjsThemeConfig(
  starlightNextjsThemeConfig: StarlightNextjsThemeConfig
): VitePlugin {
  const modules = {
    "virtual:starlight-nextjs-theme-config": `export default ${JSON.stringify(starlightNextjsThemeConfig)}`,
  };

  const moduleResolutionMap = Object.fromEntries(
    (Object.keys(modules) as (keyof typeof modules)[]).map((key) => [
      resolveVirtualModuleId(key),
      key,
    ])
  );

  return {
    name: "vite-plugin-starlight-nextjs-theme",
    load(id) {
      const moduleId = moduleResolutionMap[id];
      return moduleId ? modules[moduleId] : undefined;
    },
    resolveId(id) {
      return id in modules ? resolveVirtualModuleId(id) : undefined;
    },
  };
}

function resolveVirtualModuleId<TModuleId extends string>(
  id: TModuleId
): `\0${TModuleId}` {
  return `\0${id}`;
}

type VitePlugin = NonNullable<ViteUserConfig["plugins"]>[number];
