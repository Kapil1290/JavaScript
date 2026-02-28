const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configure Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2. Configure Multer (Handles file uploads)
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/analyze', upload.single('resume'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: "No file uploaded" });

        const jobDescription = req.body.jobDescription;

        // 3. Extract text from the PDF buffer
        const pdfData = await pdfParse(req.file.buffer);
        const resumeText = pdfData.text;

        // 4. Send to Gemini with a structured prompt
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
            Analyze this resume against the job description.
            Resume: ${resumeText}
            Job Description: ${jobDescription}

            Return ONLY a JSON object with these keys:
            "matchPercentage" (number), "missingKeywords" (array), "summary" (string).
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean JSON formatting if AI adds markdown backticks
        const cleanJson = text.replace(/```json|```/g, "").trim();
        res.json(JSON.parse(cleanJson));

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Analysis failed. Check your API key." });
    }
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));