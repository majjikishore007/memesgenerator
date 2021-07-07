var button = document.querySelector('.generate');
console.log(button);
var display = document.querySelector('.display');
console.log(display);
  var array = [];
const getRandomMemes = () => {

    console.log("mkk");
    fetch('https://meme-api.herokuapp.com/gimme/10')
    // fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font=Impact&font_size=50", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
	// }
    // })
    .then(response => response.json())
        .then(data => {
            console.log("data", data);
            data.memes.forEach((m) => {
                array.push(m.url)
                console.log(m.url);
                var card = document.createElement("div");
                card.className = "card";
                if (m.url != null) {
                    card.innerHTML = `<img src=${m.url} alt="" />
                     <a class="dnd" href=${m.url} download>Download</a>
                `
                display.appendChild(card);
                }
               
            })
        }) 
}
const displayMemes = (memes) => {
    console.log("hello");
    console.log(memes);
    console.log(memes.length);
    for (let i = 0; i < memes.length; i++){
        console.log("mkk");
    }
}
button.addEventListener('click', getRandomMemes());