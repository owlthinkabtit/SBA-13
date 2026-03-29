import 'dotenv/config';
import express from 'express';
import connectDB from './config/connection.js';
import productRoutes from '/routes/prodctRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Zenith API running on http://localhost:${port}`);
});

