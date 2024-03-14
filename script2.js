const questionElement = document.getElementById('question')//link to button
let questionIndex=0;
let econ=localStorage.getItem('Economy');
let social=localStorage.getItem('Social');


function checkLoadedPage() {
    var currentURL = window.location.href;
    if (currentURL.includes("quizcompass")) {
        function gcd(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }  
        function lcm(a, b) {
            return 2*((a * b) / gcd(a, b));
        }
        grid=lcm(socialquestions.length,economyquestions.length);

       Nextq();
    } 
    else if (currentURL.includes("cres")) {
        grid=questions.length;
        let table = document.getElementById("MyTable");
        for (let i = 0; i < grid/2; i++) {
                let row = document.createElement('tr');
                table.appendChild(row);
                // Create cells
                for (let i = 0; i < grid/2; i++) {
                    var newCell = document.createElement('td');
                    newCell.classList.add("kl");
                    newCell.innerHTML = "";
                    row.appendChild(newCell);

              }
              for (let i = grid/2; i < grid; i++) {
                var newCell = document.createElement('td');
                newCell.classList.add("kp");
                newCell.innerHTML = "";
                row.appendChild(newCell);
          }
          }
          for (let i = grid/2; i < grid; i++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            // Create cells
            for (let i = 0; i < grid/2; i++) {
                var newCell = document.createElement('td');
                newCell.classList.add("ll");
                newCell.innerHTML = "";
                row.appendChild(newCell);
          }
          for (let i = grid/2; i < grid; i++) {
            var newCell = document.createElement('td');
            newCell.classList.add("lp");
            newCell.innerHTML = "";
            row.appendChild(newCell);
      }
      }
      ////////////////////////
      //POSITION ON COMPASS///
      ///////////////////////
      let x=grid-(grid/2-econ);
      let y=grid-(grid/2-social);
      var whatRow = table.querySelector("tr:nth-child("+x+")");
      var whatCell = whatRow.querySelector("td:nth-child("+y+")");
      whatCell.style.backgroundColor = "black"
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
    console.log(questionIndex);
    Nextq()
}


function Nextq(){
    if (questionIndex < questions.length) {
        questionElement.innerText = questions[questionIndex].question; // update text
        
    } else {
    // Storing the data:
        localStorage.setItem('Social',social);
        localStorage.setItem('Economy',econ);
        window.location.replace('cres.html');
            }}

const socialquestions=[
    {
        question:'Abortions',
        answears:'Social',
    },
    {
        question:'Democracy',
        answears:'Social',
    },
    {
        question:'LGBT+ rights',
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