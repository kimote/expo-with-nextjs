import addUser from "../../../models/addUser";
import mongodb from "../../../lib/mongodb";

export default async (req, res) => {
	const { method } = req;

	// Connect to database
	await mongodb();

	// add user
	if (method === "POST") {
		try {
			const newUser = await new addUser(req.body).save();
			res
				.status(201)
				.json({ data: newUser, message: "User added successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
	if (method === "GET") {
		try {
			const users = await User.find();
			res.status(200).json({ data: tasks });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
};
