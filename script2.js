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

function findClosestPersonalities(inputx, inputy) {
    const personalities = [
        { name: "Winston Churchill",picture:"pictures/churchill.jpg",link:"https://cs.wikipedia.org/wiki/Winston_Churchill", x: 6, y: 3 },
        { name: "Ludwig von Mises",picture:"xdd",link:"sds", x: 9, y: -4 },
        { name: "Bernie Sanders",picture:"pictures/BernieSanders.jpg",link:"https://en.wikipedia.org/wiki/Bernie_Sanders", x: -4, y: -4 },
        { name: "Friedrich Hayek",picture:"xdd",link:"sds", x: 6, y: -6 },
        { name: "Thomas Paine",picture:"pictures/ThomasPaine.jpg",link:"https://en.wikipedia.org/wiki/Thomas_Paine", x: -2, y: -9 },
        { name: "Noam Chomsky",picture:"xdd",link:"sds", x: -10, y: -8 },
        { name: "Robert Mugabe",picture:"xdd",link:"sds", x: -3, y: 6 },
        { name: "Joseph Stalin",picture:"xdd",link:"sds", x: -7, y: 8 },
        { name: "Thomas Hobbes",picture:"xdd",link:"sds", x: 7, y: 2 },
        { name: "Destiny",picture:"xdd",link:"sds", x: 0, y: -7 },
        { name: "Milton Friedman",picture:"xdd",link:"sds", x: 4, y: -7 },
        { name: "J.F.K",picture:"pictures/JFK.jpg",link:"https://en.wikipedia.org/wiki/John_F._Kennedy", x: -3, y: -1 },
        { name: "T.Roosevelt",picture:"pictures/TheodorRoosevelt.jpg",link:"https://en.wikipedia.org/wiki/Theodore_Roosevelt", x: -4, y: 4 },
        { name: "xxxxxxxxxxxxxxx",picture:"xdd",link:"sds", x: 0, y: -7 }
    ];
    let closestPersonalities = [];

    personalities.forEach(personality => {
        const diff1 = Math.abs(inputx - personality.x);
        const diff2 = Math.abs(inputy - personality.y);
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
                    document.getElementById("name"+(i+1)).innerText=x[i].name;
                    document.getElementById("picture"+(i+1)).src=x[i].picture;
                    document.getElementById("link"+(i+1)).href=x[i].link;
                }
            }
            addinfo(persorder);
            
            break;
        default:
            console.log(currentURL);
    }
}