import path from 'path';

export default {
    loaders: [{
        test: /\.js$/,
        include: [
            path.resolve(__dirname, '../src')
        ],
        loader: 'babel-loader',
    }]
};
