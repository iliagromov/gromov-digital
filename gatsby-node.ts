/*exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                exportType: "named",
                namedExport: "svg",
                memo: true,
              },
            },
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "[name].[contenthash].[ext]",
                outputPath: "assets/svg/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  });
};*/

// exports.onCreateWebpackConfig = ({ getConfig, actions, plugins }) => {
//   actions.setWebpackConfig({
//     // отключить  source-map в итоговой сборке
//     devtool: getConfig().mode === "production" ? false : "source-map",
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//     },
//     // по желанию вырубить react-dev-tools
//     plugins: [
//       plugins.define({
//         __REACT_DEVTOOLS_GLOBAL_HOOK__: `({ isDisabled: true })`,
//       }),
//     ],
//   });
// };
