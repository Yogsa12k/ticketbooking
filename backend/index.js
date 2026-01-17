const express = require("express")
const app = express()
const {Mumbai , Ahmedabad, Booking}  = require("./db/database")
const cors = require("cors")

app.use(cors())
app.use(express.json());

app.post('/mumbai' , async (req , res) => {
    const Name = req.body.Name;
    const TrainNumber = req.body.TrainNumber;
    const Seats = req.body.Seats;
    const Time = req.body.Time;

    Mumbai.create({
        Name : Name,
        TrainNumber:TrainNumber,
        Seats : Seats,
        Time : Time,
    })x``
    res.send("data added to mumbai's train successfully")
})

app.post('/ahmedabad' , async (req , res) => {
    const Name = req.body.Name;
    const TrainNumber = req.body.TrainNumber;
    const Seats = req.body.Seats;
    const Time = req.body.Time;

    Ahmedabad.create({
        Name : Name,
        TrainNumber:TrainNumber,
        Seats : Seats,
        Time : Time,
    })
    res.send("data added to ahmedabad's train successfully")
})

app.get('/Mumbai' , async (req , res) => {
    const result = await Mumbai.find({})
    // console.log(result);
    res.json({
        alltrains : result
    })
})
app.get('/Ahmedabad' , async (req , res) => {
    const result = await Ahmedabad.find({})
    //console.log(result);
    res.json({
        alltrains : result
    })
})

app.get('/bookings' , async (req , res) => {
    const Totalbookings = await Booking.find({})
    console.log(Totalbookings)
    res.json({
        Totaldata : Totalbookings
    })
})

app.get('/data' , async (req, res) => {
    const value = await Booking.find({});
    res.send(value)
})
app.post('/bookticket', async (req , res) => { // for booking a ticket
    const data = req.body;
    Booking.create({
        PassengerName: data.passengerName,
        Age: data.age,
        Gender:data.gender,
        TrainNumber:data.trainNumber,
        Journeydate: data.journeyDate,
        SeatsBooked:data.seatsBooked
    })
    res.json({
        msg : "Done"
    })
})


app.listen(2000)