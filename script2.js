const questionElement = document.getElementById('question')//link to button
let questionIndex=0;
let util=localStorage.getItem('util');
let deont=localStorage.getItem('deont');


function checkLoadedPage() {
    var currentURL = window.location.href;
    if (currentURL.includes("quizcompass")) {
       Nextq();
    } 
}
window.onload = checkLoadedPage;


function ultbtn(x,lol){
    if(lol=="Social"){
        social+=x
    }
    else if(lol=="Economy"){
        econ+=x
    }
    questionIndex += 1;  
    console.log(questionIndex);
    Nextq()
}


function Nextq(){
    if (questionIndex < questions.length) {
        questionElement.innerText = questions[questionIndex].question; // update text
    } else {
    // Storing the data:
        localStorage.setItem('deont',deont);
        localStorage.setItem('util',util);
        window.location.replace('cres.html');
            }}

const questions=[
    {
        question:'Free Health care',
        answears:'Economy',
    },
    {
        question:'Free food',
        answears:'Economy',
    },
    {
        question:'LGBT+ rights',
        answears:'Social',
    },
]