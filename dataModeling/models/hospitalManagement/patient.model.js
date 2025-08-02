import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    diagnosedWith: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    pastRecords: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "medicalRecord"
    },
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);