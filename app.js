const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  console.log("It works!");

  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
    return;
  }
  console.log(enteredReason, enteredAmount);

  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": Rs" + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;

  clear();
});

cancelBtn.addEventListener("click", clear);
