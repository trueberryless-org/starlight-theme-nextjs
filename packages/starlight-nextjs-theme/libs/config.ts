import { AstroError } from "astro/errors";
import { z } from "astro/zod";

const configSchema = z
  .object({
    /**
     * Settings related to the breadcrumbs component.
     */
    breadcrumbs: z
      .object({
        /**
         * Whether to enable the breadcrumbs component.
         *
         * @default false
         */
        enabled: z.boolean().default(false),

        /**
         * The maximum number of breadcrumb items to display.
         *
         * @default 3
         */
        maxDepth: z.number().default(3),
      })
      .default({}),
  })
  .default({});

export function validateConfig(
  userConfig: unknown
): StarlightNextjsThemeConfig {
  const config = configSchema.safeParse(userConfig);

  if (!config.success) {
    const errors = config.error.flatten();

    throw new AstroError(
      `Invalid @trueberryless-org/starlight-plugins-docs-components configuration:
      
      ${errors.formErrors.map((formError) => ` - ${formError}`).join("\n")}
      ${Object.entries(errors.fieldErrors)
        .map(
          ([fieldName, fieldErrors]) =>
            ` - ${fieldName}: ${fieldErrors.join(" - ")}`
        )
        .join("\n")}
        `,
      `See the error report above for more informations.\n\nIf you believe this is a bug, please file an issue at https://github.com/trueberryless-org/starlight-plugins-docs-components/issues/new`
    );
  }

  return config.data;
}

export type StarlightNextjsThemeUserConfig = z.input<typeof configSchema>;
export type StarlightNextjsThemeConfig = z.output<typeof configSchema>;
