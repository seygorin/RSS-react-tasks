/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  serverBuildDirectory: 'build',
  publicPath: '/build/',
  serverModuleFormat: 'esm',
};
