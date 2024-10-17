export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Find require statements
  root.find(j.CallExpression, {
    callee: { name: 'require' },
    arguments: [{ value: 'workbox-webpack-plugin' }]
  }).forEach(path => {
    // Update the require argument to the new package
    path.node.arguments[0].value = '@aaroon/workbox-rspack-plugin';
    dirtyFlag = true;
  });

  return dirtyFlag ? root.toSource() : undefined;
}


export const parser = "tsx";