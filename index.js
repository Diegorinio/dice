let diceThrowResult
let resultsHistory = []
const audio = new Audio('dice.wav')
tellMeSomething = (text) => {
    const lang = 'pl-PL'
    const tell = new SpeechSynthesisUtterance(text)
    tell.pitch = 1.2
    tell.volume =5
    tell.lang = lang
    speechSynthesis.speak(tell)
}
diceThrow = () => {
    document.querySelector('.dice-button').disabled = true
    resetDiceVals()
    audio.play()
    const interval = setInterval(diceAnimation,100)
    setTimeout(()=>{
        diceThrowResult = getRandomInt(6);
        showResultOnDice()
        tellMeSomething(`Wynik rzutu to  ${getDiceResult()}`)
        document.querySelector('.dice-button').disabled = false
        document.querySelector('.act-result').innerHTML = diceThrowResult
        document.querySelector('.results-history').innerHTML += `${diceThrowResult} `
        diceThrowResult = ''
    },parseInt(audio.duration)*1000)
    setTimeout(() => {
        clearInterval(interval)    
    }, 3800);
}

getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1 - 1) + 1);
}
getDiceResult = () => {
    return diceThrowResult
}
showResultOnDice = () => {
    resetDiceVals()
    const res = parseInt(getDiceResult())
    const dice = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]
    switch (res) {
        case 1:
            changeDotVal(4)
            break
        case 2:
            changeDotVal(0)
            changeDotVal(8)
            break
        case 3:
            changeDotVal(0)
            changeDotVal(4)
            changeDotVal(8)
            break
        case 4:
            changeDotVal(0)
            changeDotVal(2)
            changeDotVal(6)
            changeDotVal(8)
            break
        case 5:
            changeDotVal(0)
            changeDotVal(2)
            changeDotVal(4)
            changeDotVal(6)
            changeDotVal(8)
            break
        case 6:
            changeDotVal(0)
            changeDotVal(2)
            changeDotVal(3)
            changeDotVal(5)
            changeDotVal(6)
            changeDotVal(8)
            break

    }
}
changeDotVal = (id) => {
    const dice_elements_list = document.querySelectorAll('.dot-el')
    dice_elements_list[id].style.display = 'inline-block'
}
resetDiceVals = () => {
    const dots = document.querySelectorAll('.dot-el')
    dots.forEach(dot => {
        dot.style.display = 'none';
    });
}
diceAnimation = () => {
    resetDiceVals()
    diceThrowResult = getRandomInt(6)
    console.log(diceThrowResult)
    showResultOnDice()
}