

 // require all 
	var express = require('express');
	var bodyParser = require('body-parser');
	var exphandlebars  = require('express-handlebars');
	var apiRouter = require('./routes/apiRoutes');
	var db = require('./models');

// call express
	var app = express();
// set port
	var port = process.env.PORT || 3000;

// medal
	app.use(bodyParser.json());       
	app.use(bodyParser.urlencoded({  extended: true}));
	app.use(express.static('public'));


	var handlebars = exphandlebars.create();

// Register `handlebars.engine` with the Express app.
	app.engine('handlebars', handlebars.engine);
	app.set('view engine', 'handlebars');

	app.use('/api', apiRouter);
				app.get('/', async (req, res) => {
					var burgers = await db.Burger.findAll({
						raw: true
					});

							res.render('home', {burgers});
				});

				app.listen(PORT, function() {
					console.log("App listening on PORT " + PORT);
				  });