import addUser from "../../../models/addUser";
import dbConnect from "../../../utils/mongodb";

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

	if (method === "DELETE") {
		try {
			await addUser.findByIdAndDelete(id);
			res.status(200).json({ message: "User Deleted Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
};

