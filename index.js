// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
const app = express();
const port = 4400;
app.use(express.static('public'));

// 2. Create an express app and set the port number.
app.set('view engine', 'ejs');

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.
app.get('/', async (req, res) => {
    
    try{
        const result = await axios.get("http://localhost:5400/random");
        
        res.render("index.ejs",{
            secret: result.data.secret,
        
            user: result.data.username,
        });
    }catch(err){
        
        res.status(500).send("failed to fetch data");
    }
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
