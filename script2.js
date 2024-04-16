const questionElement = document.getElementById('question')
let questionIndex=0;
let econ=parseInt(localStorage.getItem('Economy'))|| 0;;
let social=parseInt(localStorage.getItem('Social'))|| 0;;


window.onload = checkLoadedPage();

//tlacitko
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

//zmena tlacitka
function Nextq(){
    if (questionIndex < questions.length) {
        questionElement.innerText = questions[questionIndex].question;
        
    } else {
        localStorage.setItem('Social',social);
        localStorage.setItem('Economy',econ);
        window.location.replace('cres.html');
            }}
//list
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
//list
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
//mix list
function mixArrays(array1, array2) {
    let combinedArray = array1.concat(array2);
    for (let i = combinedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
    }
    
    return combinedArray;
}
const questions = mixArrays(socialquestions, economyquestions);

//Osobnosti

function findClosestPersonalities(inputValue1, inputValue2) {
    const personalities = [
        { name: "Churchil", value1: 10, value2: 5 },
        { name: "Regan", value1: 15, value2: 5 },
        { name: "Stalin", value1: -20, value2: -10 },
        { name: "Ghandi", value1: -10, value2: +10 }
    ];
    let closestPersonalities = [];

    personalities.forEach(personality => {
        const diff1 = Math.abs(inputValue1 - personality.value1);
        const diff2 = Math.abs(inputValue2 - personality.value2);
        const totaldiff = diff1 + diff2;

        closestPersonalities.push({ personality, totaldiff });
    });

    // Srovnat
    closestPersonalities.sort((a, b) => a.totaldiff - b.totaldiff);

    // Vrati 4 nejblizsi
    return closestPersonalities.slice(0, 4).map(item => item.personality);
}

//Kontrola stranky
function checkLoadedPage() {
    var currentURL = window.location.pathname;
    switch (currentURL) {
        case "/quizcompass.html":
            Nextq();
            break;
        case "/cres.html":
            const circle = document.getElementById("circle");
            let v1= (document.getElementById("box2").offsetWidth/2)+(((document.getElementById("MyTable").offsetWidth-circle.offsetWidth) / 40) * econ);
            let v2= (document.getElementById("box2").offsetHeight/2)+(((document.getElementById("MyTable").offsetHeight-circle.offsetHeight) / 40) * social);
            console.log(econ, social,document.getElementById("MyTable").offsetWidth);
            circle.style.left=v1;
            circle.style.top=v2;
            break;
        case "/personalities.html":
            let persorder=findClosestPersonalities(social,econ);
            function addinfo(x=[]){
                for(let i=0;i<4;i++){
                    document.getElementById("name"+(i+1)).innerText=persorder[i].name;

                }
            }
            addinfo(persorder);
            
            break;
        default:
            console.log(currentURL);
    }
}