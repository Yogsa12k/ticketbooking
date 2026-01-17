const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://moto8998rola_db_user:89988998@todo.yxym1mg.mongodb.net/?appName=Todo")

const SchemaOfMumbai = new mongoose.Schema({
    Name : String,
    TrainNumber : Number,
    Seats : Number,
    Time : String,
})

const SchemaOfAhmedabad = new mongoose.Schema({
    Name : String,
    TrainNumber : Number,
    Seats : Number,
    Time : String,
})

const SchemaOfBooking = new mongoose.Schema({
    PassengerName:String,
    Age:Number,
    Gender:String,
    TrainNumber: Number,
    Journeydate:Date,
    SeatsBooked: Number,
})

const Mumbai = mongoose.model('Mumbai' , SchemaOfMumbai);
const Ahmedabad = mongoose.model('Ahmedabad' , SchemaOfAhmedabad);
const Booking = mongoose.model('Booking' , SchemaOfBooking);
module.exports = {
    Mumbai,
    Ahmedabad,
    Booking
}
