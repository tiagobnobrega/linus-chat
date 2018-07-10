module.exports = function override(config, env) {
  const overrides = {
    target: 'web',
    output: {
      library: 'linusChat',
      libraryTarget: 'umd',
    }
  };

  return {
    ...config,
    ...overrides,
    output:{...config.output, ...overrides.output}
  };
};
