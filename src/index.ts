export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Find the import declaration for 'workbox-webpack-plugin'
  root.find(j.ImportDeclaration, { source: { value: 'workbox-webpack-plugin' } })
    .forEach(path => {
      // Update the import source to '@aaroon/workbox-rspack-plugin'
      path.node.source.value = '@aaroon/workbox-rspack-plugin';
      dirtyFlag = true;
    });

  return dirtyFlag ? root.toSource() : undefined;
}


export const parser = "tsx";