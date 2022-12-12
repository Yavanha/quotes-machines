
$(function() {
    const setQuotes = () => {
        const indexRandom = Math.trunc(Math.random() * quotes.length);
        $('#text').text(quotes[indexRandom].text)
        $('#author').text(quotes[indexRandom].author)
    }
    
    const quotes = [
        {
            text: "The best time to plant a tree was 20 years ago. The second best time is now.",
            author: "—Aldous Huxley"
        }, {
            text: "It is hard to fail but it is worse never to have tried to succeed.",
            author: "—Theodore Roosevelt"
        },
        {
            text: "That which does not kill us makes us stronger",
            author: "—Friedrich Nietzsche"
        },
        {
            text:"I have not failed. I’ve just found 10,000 ways that won’t work.",
            author: "—Thomas A. Edison"
        },
        {
            text: "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.",
            author: "—Wayne Dyer"
        }
    ]
    setQuotes()
    $("#new-quote").click((e) => {
        setQuotes();
        e.stopPropagation();
    })
})