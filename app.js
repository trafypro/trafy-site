const express = require('express');
const mysql = require('mysql2');
const cors=require('cors');
const app = express();
const PORT =  3003;

// Create a MySQL connection pool
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234567',
    database: 'contactinfo'
  });

  
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve your HTML, CSS, JS files
app.use(express.static('public'));

// Handle form submissions
app.post('/message', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Logging the received data
  console.log('Received data:', { name, email, subject, message });

  // Create a connection from the pool
  connection.query(
    'INSERT INTO formdata(name,email,subject,message) VALUES (?,?,?,?)',
    [name,email,subject,message],
    function(err, results) {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(results);
            res.status(201).end();
        }
    }
  );})



const start=()=>
{
    console.log("Connecting...");
    connection.connect((err)=>{
        if(err){
            console.log("DB Connection Error",err);
        }else{
            console.log("Connected to Db Sucessfully");
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
              });
        }
    })
};
start();