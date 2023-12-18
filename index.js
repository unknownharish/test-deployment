const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorHandling');
const app = express();
let cors = require('cors')
const PORT = process.env.PORT || 4000;


app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/').then(res => {
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});