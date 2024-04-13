const path = require('path');

const aliases = [
  'app',
  'assets',
  'components',
  'config',
  'features',
  'hooks',
  'lib',
  'providers',
  'routes',
  'stores',
  'test',
  'types',
  'utils',
];

const createAliases = srcDirectory => {
  const obj = {};

  for (const key of aliases) {
    obj[key] = path.resolve(srcDirectory, key);
  }

  return obj;
};

module.exports = createAliases;
