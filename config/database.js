import mongoose from "mongoose";

mongoose.connect(process.env['DATABASE_URL'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.error("Database connection failed:", error); // Mostrar el error en la consola
});