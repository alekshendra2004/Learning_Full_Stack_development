let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighterOne = fighters[Math.floor(Math.random() * fighters.length)]
    let fighterTwo = fighters[Math.floor(Math.random() * fighters.length)]
    stageEl.textContent = fighterOne + " VS " + fighterTwo
})
