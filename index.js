const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page, changes made!");
});

app.get('/about', (req, res) => {
    res.send("This is the About Page");
});

app.get('/contact', (req, res) => {
    res.send("Contact us at contact@gmail.com");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})