const express  =  require('express');


const {serverConfig} =   require('./src/config');

const apiRoutes =  require('./src/routes')

const app =  express();


app.use('/api',apiRoutes);


app.listen(serverConfig.PORT,() => {
    console.log(`Server is runing  successfully on PORT  : ${serverConfig.PORT} `);

})