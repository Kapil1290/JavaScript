// 1. Daily Predictions (General Vibes)
//size 5

const zodiacSigns = [
  "Aries", 
  "Taurus", 
  "Gemini", 
  "Cancer", 
  "Leo", 
  "Virgo", 
  "Libra", 
  "Scorpio", 
  "Sagittarius", 
  "Capricorn", 
  "Aquarius", 
  "Pisces"
];

const name = [
  "A cosmic shift today encourages you to trust your intuition over logic.",
  "Expect a surprising message that could change your perspective on a current project.",
  "The stars suggest today is perfect for tying up loose ends and finishing old tasks.",
  "Your energy is high today—use it to inspire those around you.",
  "A moment of quiet reflection this evening will bring the clarity you've been seeking."
];

//size 5
// 2. Love & Relationships
const loveVibes = [
  "Venus is aligning to bring harmony to a misunderstood connection.",
  "Communication is your superpower in romance today; speak your heart clearly.",
  "A new spark may fly in an unexpected place—keep your eyes and heart open.",
  "Patience with a loved one will pay off as the moon enters a more stable phase.",
  "Self-love is your focus today; the universe wants you to prioritize your own joy.",
  "Venus is aligning to bring harmony to a misunderstood connection.",
  "Communication is your superpower in romance today; speak your heart clearly.",
  "A new spark may fly in an unexpected place—keep your eyes and heart open.",
  "Patience with a loved one will pay off as the moon enters a more stable phase.",
  "Self-love is your focus today; the universe wants you to prioritize your own joy.",
  "Patience with a loved one will pay off as the moon enters a more stable phase.",
  "Self-love is your focus today; the universe wants you to prioritize your own joy."
];

//size 5
// 3. Career & Finance
const careerPath = [
  "Mercury’s influence suggests double-checking all emails and contracts today.",
  "A bold move in a meeting could catch the eye of someone influential.",
  "Financial stability is on the horizon, but avoid impulsive purchases today.",
  "Collaborative projects will thrive; don't be afraid to share your unique ideas.",
  "The stars indicate a potential for growth in a side project you've been neglecting.",
  "Mercury’s influence suggests double-checking all emails and contracts today.",
  "A bold move in a meeting could catch the eye of someone influential.",
  "Financial stability is on the horizon, but avoid impulsive purchases today.",
  "Collaborative projects will thrive; don't be afraid to share your unique ideas.",
  "The stars indicate a potential for growth in a side project you've been neglecting.",
  "Collaborative projects will thrive; don't be afraid to share your unique ideas.",
  "The stars indicate a potential for growth in a side project you've been neglecting."
];

//size 5
// 4. Cosmic Wisdom (Quotes & Slogans)
const cosmicWisdom = [
  "The stars are a map to your soul's journey, not a final destination.",
  "Trust the timing of your life; the universe is never in a hurry.",
  "You are made of stardust and infinite possibilities.",
  "Align your actions with the universe, and watch your world transform.",
  "The fault is not in our stars, but in how we choose to follow them."
];

const form = document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    
    console.dir(name);
    const res = `Hello ${name} ${surname} Your zodiac sign is ${zodiacSigns[month-1]}.
    CareerPath is ${careerPath[month-1]}. LoveVibe is ${loveVibes[year%20]}`

    const result = document.getElementById("res");
    result.textContent = res;
    console.log(result)
})