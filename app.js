const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

function presentAlert() {
  const alert = document.createElement("ion-alert");
  //   alert.cssClass = "my-custom-class";
  alert.header = "Invalid Inputs";
  //   alert.subHeader = "Subtitle";
  alert.message = "Please enter valid reason and amount!";
  alert.buttons = ["Okay!"];

  document.body.appendChild(alert);
  return alert.present();
}

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  console.log("It works!");

  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
    presentAlert();
    // alertCtrl
    //   .create({
    //     message: "Please enter valid reason and amount!",
    //     header: "Invalid Inputs",
    //     buttons: ["Okay"]
    //   })
    //   .then(alertElement => {
    //     alertElement.present();
    //   });
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
