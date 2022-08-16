import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	Name: {
        type: String,
        required: true
},
        PhoneNumber: {
        type: String,//not a string
        required: true
},
        NRC_Passport: {
        type: String,
        required: true
},
	PhysicalAddress: {
        type: String,
        required: true
},
        Email: {
        type: String,
        required: true
},
        Department: {
        type: String,
        required: true
},
});

export default mongoose.models.addUser || mongoose.model("addUser", userSchema);
