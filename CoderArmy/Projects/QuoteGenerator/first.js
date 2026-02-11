const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "Everything you've ever wanted is on the other side of fear. — George Addair",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Dream big and dare to fail. — Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
  "The way to get started is to quit talking and begin doing. — Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
  "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. — Steve Jobs",
  "People who are crazy enough to think they can change the world, are the ones who do. — Rob Siltanen",
  "Failure will never overtake me if my determination to succeed is strong enough. — Og Mandino",
  "We may encounter many defeats but we must not be defeated. — Maya Angelou",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do. — Johann Wolfgang von Goethe",
  "Imagine your life is perfect in every respect; what would it look like? — Brian Tracy",
  "We generate fears while we sit. We overcome them by action. — Dr. Henry Link",
  "Security is mostly a superstition. Life is either a daring adventure or nothing. — Helen Keller",
  "The man who has confidence in himself gains the confidence of others. — Hasidic Proverb",
  "The only thing worse than being blind is having sight but no vision. — Helen Keller"
];

const a = document.getElementById("quote")
const b = document.getElementById("button")

b.addEventListener('click',()=>{
    a.textContent = quotes[Math.floor(Math.random()*10+10)];
})

console.log(quotes[Math.floor(Math.random()*10+10)])