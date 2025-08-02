import mongoose from "mongoose";

const department = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    experienceYears: {
        type: Number,
    }
})

const doctorSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    speciality: {
        type: [department]
    },
    salary: {
        type: Number,
        required: true
    },
    allotedHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);
