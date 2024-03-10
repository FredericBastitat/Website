const questionElement = document.getElementById('question')//link to button
const buttonElement = document.getElementById('agr')
const disbuttonElement = document.getElementById('dgr')
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


function btnagr(){
    deont+=1; 
    questionIndex += 1;  
    console.log(questionIndex);
    Nextq()
}

function btndgr(){
    util+=1;
    questionIndex += 1;
    Nextq()
}

function Nextq(){
    if (questionIndex < questions.length) {
        questionElement.innerText = questions[questionIndex].question; // update text
        buttonElement.innerText = questions[questionIndex].answears[0].text;
        disbuttonElement.innerText = questions[questionIndex].answears[1].text;
    } else {
    // Storing the data:
        localStorage.setItem('deont',deont);
        localStorage.setItem('util',util);
        window.location.replace('results.html');
            }}

const questions=[
    {
        question:'A)There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person on the side track. You have two (and only two) options:',
        answears:[
            {text: 'A)Do nothing, in which case the trolley will kill the five people on the main track.'},
            {text: 'A)Pull the lever, diverting the trolley onto the side track where it will kill one person.'}
        ]
    },
    {
        question:'B)There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person on the side track. You have two (and only two) options:',
        answears:[
            {text: 'B)Do nothing, in which case the trolley will kill the five people on the main track.'},
            {text: 'B)Pull the lever, diverting the trolley onto the side track where it will kill one person.'}
        ]
    },
    {
        question:'C)There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person on the side track. You have two (and only two) options:',
        answears:[
            {text: 'C)Do nothing, in which case the trolley will kill the five people on the main track.'},
            {text: 'C)Pull the lever, diverting the trolley onto the side track where it will kill one person.'}
        ]
    }
]