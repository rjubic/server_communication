const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Server is Live on localhost:${port}`)});
app.use('/home',express.static('public'));
app.use(express.json({limit: "1mb"}));

app.post('/api', (request, response) =>{
    console.log(request.body);

    response.json({
        status: 'sucess',
        lat: request.body.lat,
        long: request.body.long
    });
})