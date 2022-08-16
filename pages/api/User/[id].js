import addUser from "../../../models/addUser";
import mongodb from "../../../lib/mongodb";

export default async (req, res) => {
	const { method } = req;
	const { id } = req.query;

	// Connect to database
	await mongodb();

	if (method === "PUT") {
		try {
			const result = await addUser.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);

			res
				.status(200)
				.json({ data: result, message: "User Updated Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

};

