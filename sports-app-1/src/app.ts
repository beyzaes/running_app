import express from 'express';
import { json } from 'body-parser';
import challengesRouter from './features/challenges';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Routes
app.use('/api/challenges', challengesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});