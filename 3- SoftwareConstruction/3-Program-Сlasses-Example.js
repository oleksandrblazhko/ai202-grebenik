import mongoose from 'mongoose';
const { Schema } = mongoose;

const HomeInfo = new Schema({
    hometype: String,
    photo: Schema.Types.Buffer,
    price: Number,
    countrooms: Number,
    info_location:{
        country: String,
        city: String,
        area: String
    }
});

const User = new Schema({
    name: String,
    surname: String,
    age: Number,
    gender: String,
    email: String,
    phone: String
});

const Online_order = new Schema({
    name: String,
    surname: String,
    age: Number,
    gender: String,
    email: String,
    phone: String
});

const Epay = new Schema({
    Fullname_sender: String,
    Fullname_customer: String,
    account: Number,
    sum: Number,
});