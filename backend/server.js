const app = require("./src/app");
const connectToDB = require("./src/db/db");

connectToDB();

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});