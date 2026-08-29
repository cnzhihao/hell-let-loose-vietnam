import { readdirSync, readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const cssFile = resolve(projectRoot, 'src/styles.css');
const sourceRoots = ['src/components', 'src/routes'].map((path) =>
  resolve(projectRoot, path)
);
const colorPattern = /#[0-9a-fA-F]{3,8}(?![0-9a-fA-F])|rgba?\s*\(|hsla?\s*\(/g;
const requiredFieldTokens = [
  'field-background',
  'field-foreground',
  'field-muted',
  'field-panel',
  'field-border',
  'field-grid',
  'field-contour',
  'field-overlay',
  'field-shadow',
  'field-visual-overlay',
];

function sourceFiles(root: string): string[] {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(root, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [path] : [];
  });
}

const violations: string[] = [];
const files = [cssFile, ...sourceRoots.flatMap(sourceFiles)];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, index) => {
    if (!colorPattern.test(line)) {
      colorPattern.lastIndex = 0;
      return;
    }
    colorPattern.lastIndex = 0;

    const isCssTokenDeclaration =
      file === cssFile && /^\s*--[a-z0-9-]+\s*:/.test(line);
    if (!isCssTokenDeclaration) {
      violations.push(
        `${relative(projectRoot, file)}:${index + 1}: ${line.trim()}`
      );
    }
  });
}

const styles = readFileSync(cssFile, 'utf8');
const missingTokens = requiredFieldTokens.filter(
  (token) => (styles.match(new RegExp(`--${token}\\s*:`, 'g')) ?? []).length < 2
);

if (missingTokens.length > 0) {
  violations.push(
    `src/styles.css: missing field token in :root and .dark: ${missingTokens.join(', ')}`
  );
}

if (violations.length > 0) {
  console.error(
    'Theme contract failed. Move runtime colors into theme tokens:'
  );
  for (const violation of violations) console.error(`- ${violation}`);
  process.exitCode = 1;
} else {
  console.log(
    `Theme contract passed: ${files.length} source files use token-backed colors.`
  );
}
