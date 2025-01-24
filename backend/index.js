require("dotenv").config();
const express = require("express");
const path = require("path")
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const apartmentRoutes = require("./routes/apartmentRoutes");

const app = express();
connectDB();

app.use(cors({
    origin: '*',  
  }));
app.use(bodyParser.json());
app.use("/api/apartments", apartmentRoutes);

app.use(express.static(path.join(__dirname, '../frontend/dist')));





app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));