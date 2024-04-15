const questionElement = document.getElementById('question')
let questionIndex=0;
let econ=parseInt(localStorage.getItem('Economy'))|| 0;;
let social=parseInt(localStorage.getItem('Social'))|| 0;;


function checkLoadedPage() {
    var currentURL = window.location.href;
    if (currentURL.includes("quizcompass")) {
       Nextq();
    } 
    else if (currentURL.includes("cres")) {
        const circle = document.getElementById("circle");
        let v1= (document.getElementById("box2").offsetWidth/2)+(((document.getElementById("MyTable").offsetWidth-circle.offsetWidth) / 40) * econ);
        let v2= (document.getElementById("box2").offsetHeight/2)+(((document.getElementById("MyTable").offsetHeight-circle.offsetHeight) / 40) * social);
        console.log(econ, social,document.getElementById("MyTable").offsetWidth);
        circle.style.left=v1;
        circle.style.top=v2;
      
    }
}
window.onload = checkLoadedPage;


function ultbtn(x){
    if(questions[questionIndex].answears=="Social"){
        social+=x
    }
    else if(questions[questionIndex].answears=="Economy"){
        econ+=x
    }
    questionIndex += 1;  
    console.log(econ, social);
    Nextq()
}


function Nextq(){
    if (questionIndex < questions.length) {
        questionElement.innerText = questions[questionIndex].question;
        
    } else {
        localStorage.setItem('Social',social);
        localStorage.setItem('Economy',econ);
        window.location.replace('cres.html');
            }}

const socialquestions=[
    {
        question:'Democracy',
        answears:'Social',
    },
    {
        question:'LGBT+ rights',
        answears:'Social',
    },
    {
        question:'LGBT+ rights',
        answears:'Social',
    },
    {
        question:'LGBT+ rights',
        answears:'Social',
    },
    {
        question:'Abortions',
        answears:'Social',
    },
    {
        question:'Democracy',
        answears:'Social',
    },
    {
        question:'Abortions',
        answears:'Social',
    },
    {
        question:'Democracy',
        answears:'Social',
    },
    {
        question:'Abortions',
        answears:'Social',
    },
    {
        question:'Democracy',
        answears:'Social',
    }
];

const economyquestions=[
    {
        question:'Free Health care',
        answears:'Economy',
    },
    {
        question:'Free food',
        answears:'Economy',
    },
    {
        question:'Gold',
        answears:'Economy',
    },
    {
        question:'Free Health care',
        answears:'Economy',
    },
    {
        question:'Free food',
        answears:'Economy',
    },
    {
        question:'Free Health care',
        answears:'Economy',
    },
    {
        question:'Free food',
        answears:'Economy',
    },
    {
        question:'Free Health care',
        answears:'Economy',
    },
    {
        question:'Free food',
        answears:'Economy',
    },
    {
        question:'Free food',
        answears:'Economy',
    }
];

function mixArrays(array1, array2) {
    let combinedArray = array1.concat(array2);
    for (let i = combinedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
    }
    
    return combinedArray;
}

const questions = mixArrays(socialquestions, economyquestions);