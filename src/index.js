import 'dotenv/config';
import app from './app';

// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3000);
// app.set('message', process.env.MESSAGE );

const port = app.get('port');

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server Running PORT:  ${port}`);
});

export default app;
