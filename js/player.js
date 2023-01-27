
const selectionArray = [];

function display(selectPlayer) {

    const selectFivePlayer = document.getElementById('select-five-player');
    selectFivePlayer.innerText = '';

    for (let i = 0; i < selectPlayer.length; i++) {
        const element = selectPlayer[i];

        const h2 = document.createElement('h2');
        h2.innerHTML = `
        <h2 class="player-list-card-title"><span class="player-list-card-title-span">${i + 1}.</span>
        ${element}</h2>
        `;
        selectFivePlayer.appendChild(h2);
    }
}


function selectToCart(element) {
    const playerName = element.parentNode.children[0].innerText;

    selectionArray.push(playerName);
    console.log(selectionArray, selectionArray.length);


    if (selectionArray.length < 6) {
        display(selectionArray);
    }
    else {
        alert('5 player is added r add kora jabe na');
    }
    element.disabled = true;
}



function getInputFieldValueById(inputvalueId) {
    const inputField = document.getElementById(inputvalueId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;

}

// function getTextFieldValueById(elementId){
//     const textElement = document.getElementById(elementId);
//     const textElementValue = textElement.innerText;
//     return textElementValue;
// }

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('per-player-cost');

 
    const playerExpense = (selectionArray.length) * perPlayerCost;
    const expenseField = document.getElementById('expense-amount');
    expenseField.innerText = playerExpense;


    document.getElementById('btn-calculate-total').addEventListener('click', function () {
        const managerCost = getInputFieldValueById('manager-cost');
        const coachCost = getInputFieldValueById('coach-cost');


        const totalamount = playerExpense + managerCost + coachCost;
        const totalAmountField = document.getElementById('total-amount');
        totalAmountField.innerText = totalamount;

    })

})







