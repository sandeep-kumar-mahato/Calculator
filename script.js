const expressionInput = document.getElementById("expression");
const resultInput = document.getElementById("result");
let expression = "";

const handleButtonClick = (value) => {
  expression += value;
  expressionInput.value = expression;
};

const handleClear = () => {
  expression = "";
  expressionInput.value = "";
  resultInput.value = "";
};

const handleDelete = () => {
  expression = expression.slice(0, -1);
  expressionInput.value = expression;
};

const handleCalculate = () => {
  try {
    const calculatedResult = eval(expression);
    resultInput.value = calculatedResult;
  } catch (error) {
    resultInput.value = "Error";
  }
};
