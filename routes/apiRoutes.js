
// express
const express = require('express');

// db re
const db = require('../models');

// create router
const router = express.Router();


		// find all burger from data
		router.get('/burgers', async (_, res) => {
					const data = await db.Burger.findAll();

					res.json(data);
		});

		// add new 
		router.post('/burger/new', async (req, res) => {
				const { name } = req.body;

					await db.Burger.create({
						name,
						isDevoured: false
						});

			res.status(200).end();
		});

		// update the berger
		router.put('/burger/:id/devour', async (req, res) => {
			const { id } = req.params;

			await db.Burger.update({
				isDevoured: true
			}, {
				where: {id}
			});

			res.status(200).end();
		});


// expeots to use it 
module.exports = router;
