const express = require('express');
const cors = require('cors');

const artistsRoutes = require('./routes/artists');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/artists', artistsRoutes);

app.listen(process.env.PORT || 3000);
