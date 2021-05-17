import chalk from 'chalk';
import 'dotenv/config';
import app from './app';

app.set('port', process.env.PORT || 3001);
// app.set('message', process.env.MESSAGE );

const port = app.get('port');

app.listen(port, () => {
  console.log(chalk.blue(`Server Running on PORT:  ${port}`));
});

export default app;
