const app = require('express')();

app.get('/', (_req, res) => res.json({ message: 'Hello' }));

app.listen(3000, () => console.log('App is running at http://127.0.0.1:3000'));
