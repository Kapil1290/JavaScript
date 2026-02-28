document.getElementById('resumeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const file = document.getElementById('resumeFile').files[0];
    const jobDesc = document.getElementById('jobDesc').value;

    btn.disabled = true;
    btn.innerText = "Processing...";

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDesc);

    try {
        const response = await fetch('http://localhost:5000/api/analyze', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        // Update UI
        document.getElementById('results').style.display = 'block';
        document.getElementById('scoreText').innerText = data.matchPercentage;
        document.getElementById('skillsText').innerText = data.missingKeywords.join(', ');
        document.getElementById('feedbackText').innerText = data.summary;

    } catch (error) {
        alert("Server error! Make sure server.js is running.");
    } finally {
        btn.disabled = false;
        btn.innerText = "Analyze Now";
    }
});