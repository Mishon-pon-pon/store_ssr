import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importFsdPlugin from "eslint-plugin-import-fsd";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "import-fsd": importFsdPlugin,
    },
  },
  //fsd package Rackets
  {
    files: ["src/packages/Rackets/**/*.{ts,tsx,js,jsx}"],
    settings: {
      fsd: {
        rootDir: `${__dirname}/src/packages/Rackets`,
        aliases: {
          "@Rackets/*": "./src/packages/Rackets/*",
        },
      },
    },
    rules: {
      "import-fsd/no-denied-layers": "error",
    },
  },
  //fsd package shell
  {
    files: ["src/packages/shell/**/*.{ts,tsx,js,jsx}"],
    settings: {
      fsd: {
        rootDir: `${__dirname}/src/packages/shell`,
        aliases: {
          "@shell/*": "./src/packages/shell/*",
        },
      },
    },
    rules: {
      "import-fsd/no-denied-layers": "error",
    },
  },
]);

export default eslintConfig;
