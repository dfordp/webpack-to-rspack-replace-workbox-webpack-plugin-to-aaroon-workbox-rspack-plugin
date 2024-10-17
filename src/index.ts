export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Transform CommonJS require statements
  root.find(j.CallExpression, {
      callee: { name: 'require' },
      arguments: [{ value: 'workbox-webpack-plugin' }],
  }).forEach((path) => {
      if (
          j.Literal.check(path.node.arguments[0]) &&
          path.node.arguments[0].value === 'workbox-webpack-plugin'
      ) {
          path.node.arguments[0] = j.literal('@aaroon/workbox-rspack-plugin');
          dirtyFlag = true;
      }
  });

  // Transform ES6 import statements
  root.find(j.ImportDeclaration, {
      source: { value: 'workbox-webpack-plugin' },
  }).forEach((path) => {
      if (
          j.Literal.check(path.node.source) &&
          path.node.source.value === 'workbox-webpack-plugin'
      ) {
          path.node.source = j.literal('@aaroon/workbox-rspack-plugin');
          dirtyFlag = true;
      }
  });

  return dirtyFlag ? root.toSource() : undefined;
}

export const parser = 'tsx';
