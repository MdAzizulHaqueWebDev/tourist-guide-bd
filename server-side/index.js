/** @format */

require("dotenv").config();
const express = require("express");
const app = express();
const mongodb = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 8000;
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SK_KEY);
// middlewareWrapper
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"https://assignmet-12-authentication.web.app",
		],
	}),
);
app.use(express.json());
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zyi5zeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	const tourPackagesCollection = client
		.db("tours-guide-bd")
		.collection("tour-packages");
	const wishListCollection = client.db("tours-guide-bd").collection("wishlist");
	const storyCollection = client.db("tours-guide-bd").collection("story");
	const reviewsCollection = client.db("tours-guide-bd").collection("reviews");
	const usersCollection = client.db("tours-guide-bd").collection("users");
	const bookingsCollection = client.db("tours-guide-bd").collection("bookings");
	const paymentsCollection = client.db("tours-guide-bd").collection("payments");
	try {
		// jwt related api
		const verifyToken = (req, res, next) => {
			const token = req.headers?.authorization_token?.split(" ")[1];
			if (!token)
				return res.status(401).send({ message: "unauthorized access" });
			jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
				if (err) {
					return res.status(401).send({ message: "unauthorized access" });
				} else {
					req.userInfo = decoded;
					next();
				}
			});
		};
		const verifyAdmin = async (req, res, next) => {
			const verifiedEmail = req.userInfo.email;
			const query = { email: verifiedEmail };
			const findUserRole = await usersCollection.findOne(query);
			const isAdmin = findUserRole?.role === "admin";
			if (!isAdmin) {
				return res.status(403).send({ message: "forbidden access" });
			}
			next();
		};
		const verifyGuide = async (req, res, next) => {
			const verifiedEmail = req.userInfo.email;
			const query = { email: verifiedEmail };
			const findUserRole = await usersCollection.findOne(query);
			const isGuide = findUserRole?.role === "guide";
			if (!isGuide) {
				return res.status(403).send({ message: "forbidden access" });
			}
			next();
		};
		app.post("/jwt", async (req, res) => {
			const userInfo = req.body;
			const token = jwt.sign(userInfo, process.env.JWT_SECRET_KEY, {
				expiresIn: "1h",
			});
			res.send({ token });
		});

		// get all tour packages
		app.get("/tour-packages", async (req, res) => {
			const result = await tourPackagesCollection.find().toArray();
			res.send(result);
		});
		// get tours category wise
		app.get("/tours", async (req, res) => {
			const category = req.query.category;
			const filter = { tourType: { $regex: category, $options: "i" } };
			const result = await tourPackagesCollection.find(filter).toArray();
			res.send(result);
		});
		app.post("/add-package", async (req, res) => {
			const packageInfo = req.body;
			const result = await tourPackagesCollection.insertOne(packageInfo);
			res.send(result);
		});
		// get single tour details
		app.get("/tour-details/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await tourPackagesCollection.findOne(query);
			res.send(result);
		});
		// bookings related api
		app.post("/bookings", verifyToken, async (req, res) => {
			const bookingPackageInfo = req.body;
			const result = await bookingsCollection.insertOne(bookingPackageInfo);
			res.send(result);
		});
		app.delete("/bookings/:id", verifyToken, async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await bookingsCollection.deleteOne(query);
			res.send(result);
		});
		app.get("/bookings/:email", verifyToken, async (req, res) => {
			const verifiedEmail = req.userInfo.email;
			if (verifiedEmail !== req.params?.email)
				return res.status(403).send({ message: "Forbidden Access" });
			const result = await bookingsCollection
				.find({ email: req.params?.email })
				.toArray();
			res.send(result);
		});
		//save user  wishlist package api
		app.post("/wishlist", async (req, res) => {
			const packageInfo = req.body;
			const filter = { email: packageInfo.email };
			const result = await wishListCollection.find(filter).toArray();
			const existPackage = result.find(
				(pack) => pack.packageId == packageInfo.packageId,
			);
			if (!existPackage) {
				const result = await wishListCollection.insertOne(packageInfo);
				return res.send(result);
			}
			res.send({ message: "already exist", insertedId: null });
		});
		app.get("/wishlist/:email", verifyToken, async (req, res) => {
			const verifiedEmail = req.userInfo.email;
			const email = req.params.email;
			if (verifiedEmail !== email)
				return res.status(403).send({ message: "Forbidden Access" });
			const filter = { email: email };
			const result = await wishListCollection.find(filter).toArray();
			res.send(result);
		});
		app.delete("/deletePackage/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await wishListCollection.deleteOne(query);
			res.send(result);
		});
		// reviews
		app.get("/reviews", async (req, res) => {
			const result = await reviewsCollection.find().toArray();
			res.send(result);
		});
		// story related api
		app.post("/story", async (req, res) => {
			const storyInfo = req.body;
			const result = await storyCollection.insertOne(storyInfo);
			res.send(result);
		});
		app.get("/story", async (req, res) => {
			const result = await storyCollection.find().toArray();
			res.send(result);
		});
		app.get("/story-details/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await storyCollection.findOne(query);
			res.send(result);
		});
		app.get("/story/:email", async (req, res) => {
			const userEmail = req.params.email;
			const query = { writerEmail: userEmail };
			const result = await storyCollection.find(query).toArray();
			res.send(result);
		});
		// users related api
		app.post("/users", async (req, res) => {
			const userInfo = req.body;
			const userEmail = userInfo?.email;
			const existUser = await usersCollection.findOne({ email: userEmail });
			if (existUser) {
				return res.send({ message: "user already haven" });
			}
			const result = await usersCollection.insertOne(userInfo);
			return res.send(result);
		});
		app.patch("/status/:email", async (req, res) => {
			const query = { email: req.params?.email };
			const newStatus = req.body.status;
			// Perform the update
			const updatedDoc = {
				$set: {
					status: newStatus,
				},
			};
			const result = await usersCollection.updateOne(query, updatedDoc);
			res.send(result);
		});

		app.get("/all-users", verifyToken, verifyAdmin, async (req, res) => {
			const searchValue = req.query?.search;
			const sort = req.query?.sort;
			const filter = { email: { $regex: searchValue, $options: "i" } };
			if (sort) filter.role = sort;
			const result = await usersCollection.find(filter).toArray();
			res.send(result);
		});

		// admin related api
		app.patch("/users/make-admin/:email", async (req, res) => {
			const makeUserEmail = req.params.email;
			const query = { email: makeUserEmail };
			const updatedDoc = {
				$set: {
					role: "admin",
				},
			};
			const result = await usersCollection.updateOne(query, updatedDoc);
			res.send(result);
		});
		// delete user
		app.delete("/users/delete/:email", async (req, res) => {
			const email = req.params.email;
			const query = { email: email };
			const result = await usersCollection.deleteOne(query);
			res.send(result);
		});
		// get user role
		app.get("/user-role/:email", async (req, res) => {
			const email = req.params.email;
			const query = { email: email };
			const findUserRole = await usersCollection.findOne(query);
			res.send({ role: findUserRole?.role });
		});

		// guider related api
		app.patch("/users/make-guider/:email", async (req, res) => {
			const makeUserEmail = req.params.email;
			const query = { email: makeUserEmail };
			const updatedDoc = {
				$set: {
					role: "guide",
				},
			};
			const result = await usersCollection.updateOne(query, updatedDoc);
			res.send(result);
		});
		// guide profile
		app.get("/guide-profile", async (req, res) => {
			const query = {
				role: "guide",
			};
			const result = await usersCollection.find(query).toArray();
			res.send(result);
		});
		app.get("/guide-profile-details/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await usersCollection.findOne(query);
			res.send(result);
		});
		// get assigned tours
		app.get(
			"/assigned-tour/:email",
			verifyToken,
			verifyGuide,
			async (req, res) => {
				const email = req.params?.email;
				const query = {
					guideEmail: email,
					status: "review",
				};
				const result = await bookingsCollection.find().toArray();
				res.send(result);
			},
		);
		// rejected packages
		app.patch(
			"/bookings/rejected/:id",
			verifyToken,
			verifyGuide,
			async (req, res) => {
				const newStatus = req.body.status;
				const id = req.params.id;
				const query = { _id: new ObjectId(id) };
				const updatedDoc = {
					$set: {
						status: newStatus,
					},
				};
				const result = await bookingsCollection.updateOne(query, updatedDoc);
				res.send(result);
			},
		);
		//accepted package
		app.patch(
			"/bookings/accepted/:id",
			verifyToken,
			verifyGuide,
			async (req, res) => {
				const newStatus = req.body.status;
				const id = req.params.id;
				const query = { _id: new ObjectId(id) };
				const updatedDoc = {
					$set: {
						status: newStatus,
					},
				};
				const result = await bookingsCollection.updateOne(query, updatedDoc);
				res.send(result);
			},
		);
		// create-payment-intent
		app.post("/create-payment-intent", async (req, res) => {
			const { price } = req.body || {};
			// Create a PaymentIntent with the order amount and currency
			const { client_secret } = await stripe.paymentIntents.create({
				amount: parseFloat(price),
				currency: "usd",
				automatic_payment_methods: {
					enabled: true,
				},
			});

			res.send({
				clientSecret: client_secret,
			});
		});
		// save payment history
		app.post("/payment-history", async (req, res) => {
			const paymentInfo = req.body;
			const result = await paymentsCollection.insertOne(paymentInfo);
			res.send(result);
		});
	} finally {
		// Ensures that the client will close when you finish/error
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	const message = "This is Assignment 12 server running";
	res.send(message);
});
app.listen(port, () => {
	console.log("App listening on port " + port + " !");
});
