import { User } from "../models/User";

export default class UserService {
    //create a user
    public static async createUser(data: any) {
        try {
            await User.init();
            const existingUser = await User.find({username: data.username});
            if (existingUser.length) {
                return false;
            }
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }

    //get users
    public static async getUsers() {
        try {
            const users = await User.find({});
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    //get a user
    public static async getUser(id: string) {
        try {
            const user = await User.findById({_id:id});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    //update a user
    public static async updateUser(id: string, body: any) {
        try {
            const user = await User.findByIdAndUpdate({_id:id}, body, {new: true});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    //delete a user
    public static async deleteUser(id: string) {
        try {
            const user = await User.findByIdAndDelete({_id:id});
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}