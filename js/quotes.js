const quotes = [
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    { 
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Being happy never goes out of style." ,
        author: "Lilly Pulitzer",
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.random() --> 0부터 1 사이의 랜덤한 숫자를 제공 
//Math.round() --> 반올림 
//Math.ceil() --> 천장(ceil)까지 높여준다는 뜻
//Mate.floor() --> 바닥(floor)까지 내려준다는 뜻
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//quotes.length라고 쓰는 이유는 추가할 때마다 귀찮기 때문에 길이를 알려주는 것으로 해결한다. 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;