import Room from "../backend/models/room";
import mongoose from "mongoose";
import { rooms } from "./data";

const seedRooms = async () => {
    try {
        await mongoose.connect("mongodb+srv://nganha1897:XCDfRCF6UnRNjIux@cluster0.vn852y5.mongodb.net/bookme?retryWrites=true&w=majority");

        await Room.deleteMany();
        console.log("Rooms are deleted");

        await Room.insertMany(rooms);
        console.log("Rooms are inserted");
        
        process.exit();
    } catch(error) {
        console.log(error);
        process.exit();
    }
};

seedRooms();

