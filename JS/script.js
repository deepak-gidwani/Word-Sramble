const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
refreshBtn = document.querySelector(".refresh-word"),
inputField = document.querySelector("input"),
checkbtn = document.querySelector(".check-word");
console.log(inputField);

let correctWord,timer;

const initTimer = (maxtime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxtime > 0){
            maxtime--;
            return timeText.innerText=maxtime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    },1000)
}

const initGame = ()=>{
    initTimer(30);  // calling init timer with maxtime 30second
    let randomObj = words[Math.floor(Math.random() * words.length)]; // for getting random objects
    console.log(randomObj);
    let wordArray = randomObj.word.split("");   // splitting each letter of random word
    for (let i = wordArray.length-1; i>0 ; i--){
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i] , wordArray[j]] = [wordArray[j] , wordArray[i]];
    }
    // console.log(wordArray);
    correctWord = randomObj.word.toLocaleLowerCase();
    wordText.innerText = wordArray.join("");  // shuffeled word as a word text
    hintText.innerText = randomObj.hint;
    inputField.value = "";
    // inputField.setAttribute("maxlength",correctWord.length);
}

initGame();


const checkWord = ()=>{
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userWord) return alert(`Please enter a word`);
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word!`);
    alert(`Congrats ${userWord} is a correct word!`);
    initGame();
}

refreshBtn.addEventListener("click",initGame);
checkbtn.addEventListener("click",checkWord);


// inputField.addEventListener("keypress",(event)=>{
//     if(event.key === 'Enter'){
//         alert("hfvf");
//         console.log(inputField.value);
//     }
// });