import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    userName: { type: String, required: [true, "User Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
});

const hydraModel = mongoose.models.hydraUser || mongoose.model("hydraUser", userSchema);

export default hydraModel;
