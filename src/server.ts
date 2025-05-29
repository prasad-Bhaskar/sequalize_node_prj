import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import db, { User } from './database/models';    // Adjust if needed

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err:any) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Optionally test DB connection before starting the server
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err:any) => {
    console.error('Unable to connect to the database:', err);
  });
