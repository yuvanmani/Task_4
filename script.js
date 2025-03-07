
let incomeAmount = [];
let expenseAmount = [];
let allDetail = [];

updateIncomeUI(incomeAmount);

function updateIncomeUI(incomeAmount) {
    let addIncome = parseFloat(0);
    const incomeLog = document.getElementById("incomeUl");
    incomeLog.innerHTML = "";

    incomeAmount.forEach((income, index) => {
        const incomeLi = document.createElement("li");
        incomeLi.className = "ml-5 mb-3 flex justify-between items-center text-lg text-gray-800 md:w-1/2 bg-green-100";
        const key = Object.keys(income)[0];
        const value = income[key];

        addIncome = addIncome + value;
        const totalIncome = document.getElementById("total-income");
        totalIncome.innerHTML = `₹ ${addIncome}`;

        incomeLi.innerHTML = `${key} : ₹ ${value} <button class="text-red-500" onclick="removeIncome(${index})">Delete</button>`;
        incomeLog.appendChild(incomeLi);

    })

    if (incomeAmount.length === 0) {
        updateIncomeBalance();
    }

}

function updateExpenseUI(expenseAmount) {
    let addExpense = parseFloat(0);
    const expenseLog = document.getElementById("expenseUl");
    expenseLog.innerHTML = "";

    expenseAmount.forEach((expense, index) => {
        const expenseLi = document.createElement("li");
        expenseLi.className = "ml-5 mb-3 flex justify-between items-center text-lg text-gray-800 md:w-1/2 bg-red-100";
        const key = Object.keys(expense)[0];
        const value = expense[key];

        addExpense = addExpense + value;
        const totalExpense = document.getElementById("total-expense");
        totalExpense.innerHTML = `₹ ${addExpense}`;


        expenseLi.innerHTML = `${key} : ₹ ${value} <button class="text-red-500" onclick="removeExpense(${index})">Delete</button>`;
        expenseLog.appendChild(expenseLi);



    })
    if (expenseAmount.length === 0) {
        updateExpenseBalance();
    }
}


function updateAllUI(allDetail) {
    let allBalance = parseFloat(0);
    const allLog = document.getElementById("allUl");
    allLog.innerHTML = "";

    allDetail.forEach((all, index) => {
        const allLi = document.createElement("li");
        allLi.className = "ml-5 mb-3 flex justify-between items-center text-lg text-gray-800 md:w-1/2 bg-blue-100";
        const key = Object.keys(all)[0];
        const value = all[key];

        allBalance = allBalance + value;
        const netBalance = document.getElementById("net-balance");
        netBalance.innerHTML = `₹ ${allBalance}`;

        allLi.innerHTML = `${key} : ₹ ${value}`;
        allLog.appendChild(allLi);
    })
    if (allDetail.length === 0) {
        updateNetBalance();
    }

}


document
    .getElementById("form")
    .addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();
    const detail = document.getElementById("detail").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (amount > 0) {
        incomeAmount.push({ [detail]: amount })
        // console.log(incomeAmount)
        // localStorage.setItem("incomeAmount",JSON.stringify(incomeAmount));
        updateIncomeUI(incomeAmount);

    } else if (amount < 0) {
        expenseAmount.push({ [detail]: amount });
        // console.log(expenseAmount)
        // localStorage.setItem("expenseAmount",JSON.stringify(expenseAmount));
        updateExpenseUI(expenseAmount);
    }
    let allDetail = [...incomeAmount, ...expenseAmount];
    // localStorage.setItem("allDetail",JSON.stringify(allDetail));
    updateAllUI(allDetail);

}

function removeIncome(index) {

    incomeAmount.splice(index, 1);
    // localStorage.setItem("incomeAmount",JSON.stringify(incomeAmount));
    updateIncomeUI(incomeAmount);
    let allDetail = [...incomeAmount, ...expenseAmount];
    // localStorage.setItem("allDetail",JSON.stringify(allDetail));
    updateAllUI(allDetail);
}
function removeExpense(index) {

    expenseAmount.splice(index, 1);
    // localStorage.setItem("expenseAmount",JSON.stringify(expenseAmount));
    updateExpenseUI(expenseAmount);
    let allDetail = [...incomeAmount, ...expenseAmount];
    // localStorage.setItem("allDetail",JSON.stringify(allDetail));
    updateAllUI(allDetail);
}


function updateIncomeBalance() {
    const totalIncome = document.getElementById("total-income");
    totalIncome.innerHTML = `₹ 0`;
}

function updateExpenseBalance() {
    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerHTML = `₹ 0`;
}

function updateNetBalance() {
    const netBalance = document.getElementById("net-balance");
    netBalance.innerHTML = `₹ 0`;
}

function reset() {

    incomeAmount = [];
    expenseAmount = [];
    allDetail = [];

    updateIncomeUI(incomeAmount);
    updateExpenseUI(expenseAmount);
    updateAllUI(allDetail);

};


function allRadio() {
    const allRadio = document.getElementById("allUl");
    allRadio.classList.remove("hidden");

    const incomeRadio = document.getElementById("incomeUl");
    incomeRadio.classList.add("hidden");

    const expenseRadio = document.getElementById("expenseUl");
    expenseRadio.classList.add("hidden");
}

function incomeRadio() {
    const incomeRadio = document.getElementById("incomeUl");
    incomeRadio.classList.remove("hidden");

    const allRadio = document.getElementById("allUl");
    allRadio.classList.add("hidden");

    const expenseRadio = document.getElementById("expenseUl");
    expenseRadio.classList.add("hidden");
}

function expenseRadio() {
    const expenseRadio = document.getElementById("expenseUl");
    expenseRadio.classList.remove("hidden");

    const allRadio = document.getElementById("allUl");
    allRadio.classList.add("hidden");

    const incomeRadio = document.getElementById("incomeUl");
    incomeRadio.classList.add("hidden");
}

