import { User } from "../models/User";

export class userService {
    //create a user
    async createUser(data: any) {
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
    async getUsers() {
        try {
            const users = await User.find({});
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    //get a user
    async getUser(id: string) {
        try {
            const user = await User.findById({_id:id});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    //update a user
    async updateUser(id: string, body: any) {
        try {
            const user = await User.findByIdAndUpdate({_id:id}, body, {new: true});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    //delete a user
    async deleteUser(id: string) {
        try {
            const user = await User.findByIdAndDelete({_id:id});
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

export const UserService = new userService();