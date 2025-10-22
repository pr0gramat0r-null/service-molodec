/**
 * Sync translations script
 *
 * What it does:
 * - Imports `src/lib/translations.ts` (run with ts-node)
 * - Ensures every language has all keys present in `ua`
 * - Missing keys are filled with `TODO: <ua value>`
 * - Writes a regenerated `src/lib/translations.ts` file with the updated translations object
 *
 * Usage:
 *   npm install --save-dev ts-node typescript @types/node
 *   npx ts-node scripts/sync-translations.ts
 *
 * NOTE: This will overwrite `src/lib/translations.ts`. Commit/backup before running.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsFile = path.resolve(__dirname, '../src/lib/translations.ts');
const translationsFileUrl = pathToFileURL(translationsFile).href;

async function main() {
type Language = 'ua' | 'ru' | 'en' | 'cz';

type TranslationMap = Record<string, string>;
type Translations = Partial<Record<Language, TranslationMap>>;

type FlagsMap = Partial<Record<Language, string>>;
type LanguageNamesMap = Partial<Record<Language, string>>;
  // Import the TS module. Run this script with ts-node so import works.
  let mod: unknown;
  try {
    mod = await import(translationsFileUrl);
  } catch (e) {
    console.error('Failed to import translations module. Run the script with ts-node: npx ts-node scripts/sync-translations.ts');
    console.error(e);
    process.exit(1);
  }

  // Helper to read named or default exports from the imported module
  const imported = mod as Record<string, unknown>;
  function getExport<T>(key: string): T | undefined {
    if (key in imported && imported[key] !== undefined) return imported[key] as T;
    const def = imported['default'] as Record<string, unknown> | undefined;
    if (def && key in def) return def[key] as T;
    return undefined;
  }

  const translations = getExport<Translations>('translations');
  const flags: FlagsMap = getExport<FlagsMap>('flags') ?? {};
  const languageNames: LanguageNamesMap = getExport<LanguageNamesMap>('languageNames') ?? {};

  if (!translations || !translations.ua) {
    console.error('translations.ua (base language) not found in module. Aborting.');
    process.exit(1);
  }

  const baseKeys = Object.keys(translations.ua);

  let added = 0;
  for (const lang of Object.keys(translations) as Language[]) {
    if (lang === 'ua') continue;
    const obj = translations[lang] ?? (translations[lang] = {});
    for (const k of baseKeys) {
      if (obj[k] === undefined) {
        obj[k] = `TODO: ${translations.ua?.[k] ?? ''}`;
        added++;
      }
    }
  }

  console.log(`Added ${added} missing keys.`);

  // Prepare file content. We'll stringify translations and other exports.
  const header = `export type Language = 'ua' | 'ru' | 'en' | 'cz';\n\n`;

  const content = `export const translations = ${JSON.stringify(translations, null, 2)};\n\n` +
    `export const getTranslation = (lang: Language, key: string): string => {\n` +
    `  const langObj = translations[lang] as Record<string, string> | undefined;\n` +
    `  const baseObj = translations['ua'] as Record<string, string>;\n` +
    `  if (langObj && typeof langObj[key] === 'string') return langObj[key];\n` +
    `  if (baseObj && typeof baseObj[key] === 'string') return baseObj[key];\n` +
    `  return key;\n` +
    `};\n\n` +
    `export const flags = ${JSON.stringify(flags, null, 2)};\n\n` +
    `export const languageNames = ${JSON.stringify(languageNames, null, 2)};\n`;

  const final = header + content;

  // Backup original file
  const backupPath = translationsFile + '.backup-' + Date.now();
  fs.copyFileSync(translationsFile, backupPath);
  console.log('Backup created at', backupPath);

  fs.writeFileSync(translationsFile, final, 'utf8');
  console.log('translations.ts updated. Please review, translate TODOs and commit changes.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
