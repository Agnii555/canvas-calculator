//creating Canvas

const canvas = document.getElementById('canvasA');
const ctx = canvas.getContext('2d');

let expression = "";


//Creating Calculator buttons 

const buttons = [
  { text: '', x: 0, y: 100, width: 55, height: 50 },
  { text: '', x: 56, y: 100, width: 55, height: 50 },
  { text: '', x: 112, y: 100, width: 55, height: 50 },
  { text: '%', x: 168, y: 100, width: 55, height: 50 },
  { text: '/', x: 224, y: 100, width: 55, height: 50 },
  { text: '(', x: 0, y: 151, width: 55, height: 50 },
  { text: '7', x: 56, y: 151, width: 55, height: 50 },
  { text: '8', x: 112, y: 151, width: 55, height: 50 },
  { text: '9', x: 168, y: 151, width: 55, height: 50 },
  { text: 'x', x: 224, y: 151, width: 55, height: 50 },
  { text: ')', x: 0, y: 202, width: 55, height: 50 },
  { text: '4', x: 56, y: 202, width: 55, height: 50 },
  { text: '5', x: 112, y: 202, width: 55, height: 50 },
  { text: '6', x: 168, y: 202, width: 55, height: 50 },
  { text: '-', x: 224, y: 202, width: 55, height: 50 },
  { text: 'Back', x: 0, y: 253, width: 55, height: 50 },
  { text: '1', x: 56, y: 253, width: 55, height: 50 },
  { text: '2', x: 112, y: 253, width: 55, height: 50 },
  { text: '3', x: 168, y: 253, width: 55, height: 50 },
  { text: '+', x: 224, y: 253, width: 55, height: 50 },
  { text: '0', x: 0, y: 304, width: 167, height: 50 },
  { text: '.', x: 168, y: 304, width: 55, height: 50 },
  { text: '=', x: 224, y: 304, width: 55, height: 50 }
];

//creating Canvas elements

function drawButtons() {
  let count=1;
  buttons.forEach(button => {
      if(count === 5 || count === 10 || count === 15 || count === 20 || count === 23) {
        //Color code for Orange Buttons
        ctx.fillStyle = '#FF9F0C';
      } else if(count === 1 || count === 2 || count === 3){
        //Color code for Orange Buttons
        ctx.fillStyle = 'rgba(95, 96, 101, 255)';
      } else {
        //Color code for Default Buttons
        ctx.fillStyle = '#787A7E';
      }

      count++;
      ctx.fillRect(button.x, button.y, button.width, button.height);
      ctx.fillStyle = '#fff';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
  });
}

//fetching buttons onclick 
canvas.addEventListener('click', function(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  //Event listener for "%"
  if((x>=300 && x<=405) && (y>180 && y<=270)) {
    char = "%";
    AddExpression();
  }
  //Event listener for "/"
  else if((x>405 && x<=500) && (y>180 && y<=270)) {
    char = "/";
    AddExpression();
  }

  //Event listener for "("
  else if((x>=0 && x<=100) && (y>=270 && y<=360)) {
    char = "(";
    AddExpression();
  }
  //Event listener for "7"
  else if((x>100 && x<=200) && (y>=270 && y<=360)) {
    char = "7";
    AddExpression();
  }
  //Event listener for "8"
  else if((x>200 && x<=300) && (y>=270 && y<=360)) {
    char = "8";
    AddExpression();
  }
  //Event listener for "9"
  else if((x>300 && x<=400) && (y>=270 && y<=360)) {
    char = "9";
    AddExpression();
  }
  //Event listener for "x"
  else if((x>400 && x<=500) && (y>=270 && y<=360)) {
    char = "*";
    AddExpression();
  }

  //Event listener for ")"
  else if((x>0 && x<=100) && (y>360 && y<=460)) {
    char = ")";
    AddExpression();
  }
  //Event listener for "4"
  else if((x>100 && x<=200) && (y>360 && y<=460)) {
    char = "4";
    AddExpression();
  }
  //Event listener for "5"
  else if((x>200 && x<=300) && (y>360 && y<=460)) {
    char = "5";
    AddExpression();
  }
  //Event listener for "6"
  else if((x>300 && x<=400) && (y>360 && y<=460)) {
    char = "6";
    AddExpression();
  }
  //Event listener for "-"
  else if((x>400 && x<=500) && (y>360 && y<=460)) {
    char = "-";
    AddExpression();
  }

  //Event listener for "Back"
  else if((x>0 && x<=100) && (y>460 && y<=560)) {
    RemoveExpression();
    printExpression();
  }
  //Event listener for "1"
  else if((x>100 && x<=200) && (y>460 && y<=560)) {
    char = "1";
    AddExpression();
  }
  //Event listener for "2"
  else if((x>200 && x<=300) && (y>460 && y<=560)) {
    char = "2";
    AddExpression();
  }
  //Event listener for "3"
  else if((x>300 && x<=400) && (y>460 && y<=560)) {
    char = "3";
    AddExpression();
  }
  //Event listener for "+"
  else if((x>400 && x<=500) && (y>460 && y<=560)) {
    char = "+";
    AddExpression();
  }

  //Event listener for "0"
  else if((x>0 && x<=300) && (y>560 && y<=660)) {
    char = "0";
    AddExpression();
  }
  //Event listener for "."
  else if((x>300 && x<=400) && (y>560 && y<=660)) {
    char = ".";
    AddExpression();
  }
  //Event listener for "="
  else if((x>400 && x<=500) && (y>560 && y<=660)) {
    CalculateExpression();
  }
});

//Function to add selected characters in the expression
function AddExpression() {
  expression += char;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButtons();
  ctx.textAlign = 'right';
  ctx.fillText(expression, 250, 30);
}

//Function to remove last character from the expression
function RemoveExpression() {
  expression = expression.slice(0, -1);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawButtons();
    ctx.textAlign = 'right';
    ctx.fillText(expression, 250, 30);
}

//Function to calculate expression
function CalculateExpression() {
  try {
    final_expression = expression;
    expression = calculate(expression);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawButtons();
    ctx.textAlign = 'right';
    ctx.fillText(final_expression, 250, 30);
    ctx.fillText(expression, 250, 60);
  } catch (error) {
    final_expression = expression;
    expression = "Invalid Expression";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawButtons();
    ctx.textAlign = 'right';
    ctx.fillText(final_expression, 250, 30);
    ctx.fillText(expression, 250, 60);
  }
}

function calculate(fn) {
  return new Function('return ' + fn)();
}

// Initial draw
drawButtons();
