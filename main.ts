// Two Days of Quiet Dread — entry program (Node 22, stdlib only).
// Writes one original one-line code review comment to /output/entry.txt.
// Revision: the comment itself is unchanged, but the program now also guards
// the single-line rule the judge weighs first — a newline anywhere in the
// comment would fail the entry outright, so refuse it here instead of
// shipping it. Flat approval, quiet dread: the tests are green and the only
// people who ever understood this code are gone.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const COMMENT =
  'Approved. The tests pass and the code is correct as far as anyone alive still knows.';

// Writes exactly the comment, no trailing newline: the gate counts characters
// (1-140), so the file is 84 characters / 84 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (COMMENT.length < 1 || COMMENT.length > 140 || COMMENT.includes('\n')) {
  throw new Error(`comment must be 1-140 characters on one line, got ${COMMENT.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), COMMENT, 'utf8');
