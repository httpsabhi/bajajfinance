const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = "abhay_kumar_01022003";
    const email = "22BAI70674@cuchd.in";
    const roll_number = "22BAI70674";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    let highest_alphabet = [];
    if (alphabets.length > 0) {
        highest_alphabet.push(alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b));
    }

    const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});