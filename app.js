const btn = document.getElementById('btn');
const output_quote = document.getElementById('output');

// Array with quotes
// Масив з цитатами
const quotes = 
    [
        'I think it is fair to say that personal computers have become the most empowering tool we have ever created. They are tools of communication, they are tools of creativity, and they can be shaped by their user. <br> -Bill Gates',
        'Everybody should learn to program a computer, because it teaches you how to think. <br> - Steve Jobs',
        'I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.<br> - Elon Musk',
    ];

// Add an event to the button
// Додаємо подію кнопці
btn.addEventListener('click', randomQuotes)

// Function
// Функція
function randomQuotes() {
    let random =  quotes[Math.floor(Math.random() * quotes.length)];
    output_quote.innerHTML = random;
}