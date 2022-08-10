import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	task: {
        type: String,
        required: true },
	completed: {
        type: Boolean,
        default: false },
});

export default mongoose.models.addUser || mongoose.model("addUser", userSchema);
