const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorHandling');
const app = express();
let cors = require('cors')
require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT || 4000;
const path = require('path')


app.use(cors())
app.use(bodyParser.json());

mongoose.connect(process.env.mongourl).then(res => {
  console.log('db connected successfully..!')
})
// Use routes from different modules
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorHandler);



app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});