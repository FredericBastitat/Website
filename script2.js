const questionElement = document.getElementById('question')
let questionIndex=0;
let econ=parseInt(localStorage.getItem('Economy'))|| 0;;
let social=parseInt(localStorage.getItem('Social'))|| 0;;


//tlacitko
function ultbtn(x){
    if(questions[questionIndex].answears=="Social"){
        switch (questions[questionIndex].polarity){
            case '+':
                social+=x;
                break;
            case '-':
                social-=x;
                break;
        }
    }
    else if(questions[questionIndex].answears=="Economy"){
        switch (questions[questionIndex].polarity){
            case '+':
                econ+=x;
                break;
            case '-':
                econ-=x;
                break;
        }
    }
    questionIndex += 1;  
    console.log(econ, social);
    Nextq()
}

//zmena tlacitka
function Nextq(){
    if (questionIndex < questions.length) {
        console.log("1");
        questionElement.innerText = questions[questionIndex].question;
        
    } else {
        console.log("2");
        localStorage.setItem('Social',social);
        localStorage.setItem('Economy',econ);
        window.location.replace('cres.html');
            }}
//list
const socialquestions=[
    {
        question:'Abortion should be restricted, with exceptions only for cases of rape, incest, or when the mothers life is at risk.',
        answears:'Social',
        polarity:'-'

    },
    {
        question:'Immigration should be limited, and stricter border controls should be implemented to protect national security and preserve cultural identity.',
        answears:'Social',
        polarity:'-'
    },
    {
        question:'Drug addiction should be treated as a public health issue, and policies should prioritize harm reduction, treatment, and decriminalization of non-violent drug offenses.',
        answears:'Social',
        polarity:'+'
    },
    {
        question:'LGBTQ+ individuals should have equal rights and protections under the law, including the right to marry.',
        answears:'Social',
        polarity:'+'
    },
    {
        question:'Implementing stricter gun control measures, is necessary to reduce gun violence.',
        answears:'Social',
        polarity:'-'
    },
    {
        question:'Freedom of speech should be limited to prevent the spread of harmful ideas, dissinformation and hoaxes.',
        answears:'Social',
        polarity:'-'
    },
    {
        question:'A Privacy rights are fundamental, and policies should protect individuals from government intrusion into their personal lives, including surveillance and data collection.',
        answears:'Social',
        polarity:'+'
    },
    {
        question:'Freedom is more important than security.',
        answears:'Social',
        polarity:'+'
    },
    {
        question:'Voting rights should be restricted to ensure stability and prevent undesirable outcomes, with strict eligibility criteria and limited access to voting.',
        answears:'Social',
        polarity:'-'
    },
    {
        question:'The state should regulate the curriculum to ensure that children receive a good education. And it should not allow homeschooling.',
        answears:'Social',
        polarity:'-'
    }
];
//list
const economyquestions=[
    {
        question:'High-income earners should be taxed at a higher rate to fund social programs.',
        answears:'Economy',
        polarity:'-'
    },
    {
        question:'Raising the minimum wage is necessary to ensure a living wage for all workers.',
        answears:'Economy',
        polarity:'-'
    },
    {
        question:'Reducing welfare programs encourages self-reliance and personal responsibility.',
        answears:'Economy',
        polarity:'+'
    },
    {
        question:'Reducing regulations fosters innovation and economic freedom.',
        answears:'Economy',
        polarity:'+'
    },
    {
        question:'Strengthening labor unions is essential to safeguard workers rights and ensure fair wages.',
        answears:'Economy',
        polarity:'-'
    },
    {
        question:'Trade should be regulated to protect domestic industries and workers from unfair competition.',
        answears:'Economy',
        polarity:'-'
    },
    {
        question:'I prefer privatized healthcare, becouse it fosters individual choice and competition, promoting efficiency and innovation in the healthcare sector.',
        answears:'Economy',
        polarity:'+'
    },
    {
        question:'Reducing government spending and debt is crucial for long-term economic stability and individual freedom.',
        answears:'Economy',
        polarity:'+'
    },
    {
        question:'Reducing income inequality through wealth redistribution measures is a priority.',
        answears:'Economy',
        polarity:'-'
    },
    {
        question:'Limiting the power of large corporations is important to prevent exploitation and ensure fair competition.',
        answears:'Economy',
        polarity:'-'
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
window.onload = checkLoadedPage();