import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";

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
};
}