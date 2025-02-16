const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Ensure Correct Routes Are Assigned
app.use("/api/users", require("./routes/userroutes")); // Correctly handles user-related routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
