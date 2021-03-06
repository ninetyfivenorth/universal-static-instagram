'use strict';

// Leading slash, no trailing slash
export default (path) => {
  if (typeof path !== 'string') path = '';
  const prefix = path.charAt(0) === '/' ? '' : '/';
  const main = path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  return main ? prefix + main : '';
};
