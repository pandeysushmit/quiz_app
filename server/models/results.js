import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
    username: String,
    rollNo: String,
    marks1: Number,
    marks2: Number,
    marks3: Number,
});
const results= mongoose.model('results',resultSchema);
export default results;