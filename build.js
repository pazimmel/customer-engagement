import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import colors from 'colors';

process.env.NODE_ENV="developement"

webpack(webpackConfig).run((err, stats)=>{
    if (err){
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();
    if(jsonStats.hasErrors){
        return jsonStats.errors.map(error => console.log(error.red));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log('Your app has compiled');
    return 0;
})