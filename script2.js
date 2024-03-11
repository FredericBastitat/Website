const questionElement = document.getElementById('question')//link to button
let questionIndex=0;
let econ=localStorage.getItem('Economy');
let social=localStorage.getItem('Social');
let grid=localStorage.getItem('Size');


function checkLoadedPage() {
    var currentURL = window.location.href;
    if (currentURL.includes("quizcompass")) {
       Nextq();
    } 
    else if (currentURL.includes("cres")) {
        grid=20
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
      let x=econ;
      let y=social;
      var whatRow = table.querySelector("tr:nth-child("+x+")");
      var whatCell = whatRow.querySelector("td:nth-child("+y+")");
      whatCell.innerHTML = "X";
    }
}
window.onload = checkLoadedPage;


function ultbtn(x,lol){
    if(question.answears=="Social"){
        social+=x
    }
    else if(question.answears=="Economy"){
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
        localStorage.setItem('Size',questions.length);
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