/*

http://localhost:8083/post-test


{
    "name": "Hari",
    "job": "leader"
}


*/


const express = require('express');
const axios = require('axios')

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const url = "https://reqres.in/api/users"

app.post('/post-test', (req, res) => {

    var data = req.body;

    var response;

    // console.log('data:', data);
    
    axios.post(url, {

        data
    
    })
    .then(resp => {

        // console.log(`statusCode: ${res.status}`)

        // console.log(res.data);

        response = JSON.stringify(resp.data);

        console.log(response)
        
        res.send(response)


    })
    .catch(error => {

        console.error(error);

    })    

})

app.listen(8083, () => console.log(`Started server at http://localhost:8083!`));