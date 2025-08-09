const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log("MongoDB Connected");

    // Create one teacher and one student
    const hashedPassword = await bcrypt.hash("password", 10);

    await User.deleteMany(); // optional: clears all users

    await User.create([
        { username: "teacher", password: hashedPassword, role: "teacher" },
        { username: "student", password: hashedPassword, role: "student" }
    ]);

    console.log("Dummy users created");
    process.exit();
})
.catch(err => {
    console.error("Mongo error:", err);
    process.exit(1);
});
