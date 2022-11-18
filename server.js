const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// built-in middleware for json
app.use(express.json());

// routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
