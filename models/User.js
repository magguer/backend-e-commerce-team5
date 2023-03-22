const { Schema, mongoose } = require("../db");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
    {
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
        firstname: {
            type: String,
            required: [true, "Inserte un nombre."],
        },
        lastname: {
            type: String,
            required: [true, "Inserte un apellido."],
        },
        password: {
            type: String,
            required: [true, "Inserte un nickname."],
        },
        email: {
            type: String,
            required: [true, "Inserte un email."],
            unique: true,
        },
        address: [{
            type: String,
        }],
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
    },
    { timestamps: true }
);

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    user.id = user._id.toString();
    delete user.password;
    return user;
};

// Bcrypt - Password
userSchema.pre('save', async function (next) {
    if (this.isModified("password") || this.isNew) {
        this.password = await bcrypt.hash(this.password, 8)
        next();
    }
})

const user = new User({
    firstname: "Martín",
    lastname: "Suarez",
    password: "123",
    email: "martin@gmail.com"
})
user.save()


const User = mongoose.model("User", userSchema);
module.exports = User;