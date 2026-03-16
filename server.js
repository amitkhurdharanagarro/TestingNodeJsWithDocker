const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
let hitCount = 0;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/click', (req, res) => {
    hitCount++;
    res.json({ hits: hitCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
