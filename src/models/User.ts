import { Schema, model } from "mongoose";

const UserSchema = new Schema({
     username: {
        type: String,
        required: [true, 'username must be provided'],
        trim: true,
        maxlength: [20, 'username can not be more than 20 characters'],
        unique: true
     },
     password: {
        type: String,
        required: [true, 'password must be provided'],
        maxlength: [255, 'username can not be more than 255 characters']
     }
});

export const User = model('User', UserSchema);