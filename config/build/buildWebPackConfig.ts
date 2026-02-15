import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import buildDevServer from "./buildDevServer";

export function buildWebPackConfig(options: BuildOptions): webpack.Configuration {

    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
        devtool: options.isDev ? 'inline-source-map': undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    };
}