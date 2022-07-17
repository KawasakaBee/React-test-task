const express = require('express');
const tableRouter = require('./routes/table.routes');
const corsMiddleware = require('./middleware/cors.middleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/', tableRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
