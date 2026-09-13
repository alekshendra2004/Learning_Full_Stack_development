
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById('message-el')
let sumEl=document.querySelector('#sum-el')
let cardsEl=document.querySelector("#cards-el")


let player = {
    name: "Alex",
    chips: 145

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive=true
    isBlackJack=false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}
function getRandomCard(){
    let card=Math.floor((Math.random()*13)+1)
    if(card===1){
        return 11
    }
    else if(card>10){
        return 10
    }
    else{
        return card
    }
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for (let i=0; i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent= "Sum: "+sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message
}
 function newCard(){
    if (isAlive===true && hasBlackJack===false){
        messageEl.textContent="New card"
        let newcard=getRandomCard()
        sum+=newcard
        cards.push(newcard)
        renderGame()
    }
    
 }
