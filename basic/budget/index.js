var balance=0;
var output='';
var id=0;

var budgetInput = document.querySelector('#budget-input');
var expenseInput = document.querySelector('#expense-input');
var expenseDes = document.querySelector('#expense-des');

document.querySelector('.budget-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(budgetInput.value);
    document.getElementById('budget-amount').innerHTML = budgetInput.value;
    balance = budgetInput.value;
    document.getElementById('balance-amount').innerHTML = balance;
});


document.querySelector('.expense-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    expense();
    function expense(){
    var expenseValue = expenseInput.value;
    var expenseDesValue = expenseDes.value;
    document.getElementById('expense-amount').innerHTML = expenseValue;
    balance -= expenseValue; 
    document.getElementById('balance-amount').innerHTML = balance;

    let item = {
        expenseValue,
        expenseDesValue,
        id
    };

    var expense = document.querySelector('#list');
    //var expenseListInfo = document.querySelector('#expense-list__info');
    // var div  = document.createElement('div');
    output += `
    <div class="expense-item d-flex justify-content-between align-items-baseline">
    <h6 class="expense-title mb-0 text-uppercase list-item">${expenseDesValue}</h6>
    <h5 class="expense-amount mb-0 list-item">${expenseValue}</h5>
    <div class="expense-icons list-item">
     <a href="#" class="edit-icon mx-2" data-id="expense.id">
      <i class="fas fa-edit"></i>
     </a>
     <a href="#" class="delete-icon" data-id="expense.id">
      <i class="fas fa-trash"></i>
     </a>
    </div>
    </div>
    `;
    expense.innerHTML = output;

    var dlt = document.querySelectorAll('.fa-trash');
    dlt.forEach(delet);

    var update = document.querySelectorAll('.fa-edit');
    update.forEach(upd);
    
    }
})
function delet(del){
    del.addEventListener('click',(e)=>{
        console.log(e.target.parentElement.parentElement.parentElement);
        e.target.parentElement.parentElement.parentElement.remove();
    })
    }

function upd(element){
    element.addEventListener('click',(e)=>{
    })
}