import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    
    name: {
        type: String,
        required: true,        
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    age:{
        type: Number,
        required: true,        
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
    
},  {
    timestamps: true,
});

export default models.Users || model('Users', userSchema);