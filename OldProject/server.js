const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
app.use(cors()); // Allows the HTML file to talk to this server
app.use(express.json());

// 1. Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2. Configure Multer (Memory storage is best for quick AI analysis)
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/analyze', upload.single('resume'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: "No file uploaded" });

        const jobDescription = req.body.jobDescription;

        // 3. Extract text from the uploaded PDF
        const pdfData = await pdfParse(req.file.buffer);
        const resumeText = pdfData.text;

        // 4. Connect to Gemini Model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
            Analyze this resume against the job description.
            Resume Text: ${resumeText}
            Job Description: ${jobDescription}

            Respond ONLY with a JSON object in this exact format:
            {
                "matchPercentage": 85,
                "missingKeywords": ["React", "Node.js"],
                "summary": "The candidate has strong frontend skills but lacks backend experience."
            }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean the AI response (it sometimes adds markdown backticks)
        const cleanJson = text.replace(/```json|```/g, "").trim();
        res.json(JSON.parse(cleanJson));

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "Analysis failed. Ensure your API key is correct." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));