import express from "express";
import cors from "cors";


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
