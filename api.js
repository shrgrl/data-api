const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT || 5000

var data = require("./data.json");

app.get("/", function(req, res) { 
	res.json(data); 
});

app.listen(PORT, function() {
 console.log("Server running on port 5000...");
});
