import rollupCommonjs from '@rollup/plugin-commonjs';
import { fromRollup } from '@web/dev-server-rollup';
import rollupReplace from '@rollup/plugin-replace';

const replace = fromRollup(rollupReplace);
const commonjs = fromRollup(rollupCommonjs);

export default {
  appIndex: 'demo/index.html',
  open: true,
  nodeResolve: true,
  // esbuildTarget: "auto",
  plugins: [
    replace({
      preventAssignment: true,
      include: ['dw-markdown.js'],
      'isomorphic-dompurify': 'dompurify'
    }),
    commonjs()
  ]
};