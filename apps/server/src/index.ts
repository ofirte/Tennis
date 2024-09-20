import express, { Request, Response } from 'express';
import { MySharedType } from '@shared/types';

const app = express();
const port = 3000;
const x: MySharedType = {
  id: '1',
  name: 'John Doe',
};
// Basic route to test the server
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
