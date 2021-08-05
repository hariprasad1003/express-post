/*

{
  "api_key": "2b997be77e2cc22becfd4c66426ef504",
  "order_id": "654321",
  "team_id": "",
  "auto_assignment": "0",
  "job_description": "groceries delivery",
  "job_pickup_phone": "+1201555555",
  "job_pickup_name": "7 Eleven Store",
  "job_pickup_email": "",
  "job_pickup_address": "frigate bay 1",
  "job_pickup_latitude": "30.7188978",
  "job_pickup_longitude": "76.810296",
  "job_pickup_datetime": "2016-08-14 19:00:00",
  "customer_email": "john@example.com",
  "customer_username": "John Doe",
  "customer_phone": "+12015555555",
  "customer_address": "frigate bay 2",
  "latitude": "30.7188978",
  "longitude": "76.810298",
  "job_delivery_datetime": "2016-08-14 21:00:00",
  "has_pickup": "1",
  "has_delivery": "1",
  "layout_type": "0",
  "tracking_link": 1,
  "timezone": "-330",
  "custom_field_template": "Template_1",
  "meta_data": [
    {
      "label": "Price",
      "data": "100"
    },
    {
      "label": "Quantity",
      "data": "100"
    }
  ],
  "pickup_custom_field_template": "Template_2",
  "pickup_meta_data": [
    {
      "label": "Price",
      "data": "100"
    },
    {
      "label": "Quantity",
      "data": "100"
    }
  ],
  "fleet_id": "",
  "p_ref_images": [
    "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
    "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
  ],
  "ref_images": [
    "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
    "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
  ],
  "notify": 1,
  "tags": "",
  "geofence": 0,
  "ride_type": 0
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

    console.log('data:', data);
    
    axios.post(url, {
        data
    })
    .then(res => {

        // console.log(`statusCode: ${res.status}`)
        console.log(res.data);

        response = res.data;

    })
    .catch(error => {

        console.error(error);

    })
    
    res.send(response);

})

app.listen(8083, () => console.log(`Started server at http://localhost:8083!`));