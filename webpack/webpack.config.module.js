import path from 'path';

export default {
    preLoaders: [{
        test: /\.js$/,
        include: [
            path.resolve(__dirname, '../src')
        ],
        loader: 'eslint-loader',
    }],
    loaders: [{
        test: /\.js$/,
        include: [
            path.resolve(__dirname, '../src')
        ],
        loader: 'babel-loader',
    }]
};
