const form = document.getElementById('form');
const date = document.getElementById('date');
const tableBody = document.querySelector('tbody');
const selectOption = document.querySelector('select');
const itemLocation = document.getElementById('item-location');
const spentAmount = document.getElementById('cash-value');
const itemDescription = document.querySelector('.item-description');
const addButton = document.getElementById('add-button');
const deleteButton = document.getElementById('remove-button');
//==========EVENT LISTENERS=======
addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const dateInput = date.value;
  const paymentType = selectOption.value;
  const itemAmount = spentAmount.value;
  const purchasedAt = itemLocation.value;
  const itemDetails = itemDescription.value;
  let completedChecks = false;
  completedChecks = inputChecker(
    dateInput,
    paymentType,
    itemAmount,
    purchasedAt,
    itemDetails
  );
  if (completedChecks === false) {
    return;
  } else {
    const newRow = tableBuilder(
      dateInput,
      paymentType,
      itemAmount,
      purchasedAt,
      itemDetails
    );
    tableBody.appendChild(newRow);
    form.reset();
  }
});

tableBody.addEventListener('click', (e) => {
  seletedColorChanger(e.target);
});

//build complete table once check have bee maid
function tableBuilder(date, paymentType, amount, purchasedAt, itemDescription) {
  let tableRow = document.createElement('tr');

  const dateCell = document.createElement('td');
  dateCell.textContent = `${date}`;
  tableRow.appendChild(dateCell);

  const paymentTypeCell = document.createElement('td');
  paymentTypeCell.textContent = `${paymentType}`;
  tableRow.appendChild(paymentTypeCell);

  const amountCell = document.createElement('td');
  amountCell.textContent = `$${amount}`;
  tableRow.appendChild(amountCell);

  const purchasedAtCell = document.createElement('td');
  purchasedAtCell.textContent = `${purchasedAt}`;
  tableRow.appendChild(purchasedAtCell);

  const itemDescriptionCell = document.createElement('td');
  itemDescriptionCell.textContent = `${itemDescription}`;
  tableRow.appendChild(itemDescriptionCell);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('id', 'delete-button');
  tableRow.appendChild(deleteButton);

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteButton.parentElement.remove();
  });

  return tableRow;
}

//checks every input field for empty fields
function inputChecker(dateInput, typeSpent, numberSpent, spentDetails) {
  if (dateInput === '') {
    alert('please pick a date');
    return false;
  }
  if (typeSpent === '') {
    alert('please pick a type of currency');
    return false;
  }
  if (numberSpent <= 0 || numberSpent === NaN) {
    alert('please enter amount over $0');
    return false;
  }
  if (spentDetails === '') {
    alert('please enter spent desc');
    return false;
  }
  return true;
}

function seletedColorChanger(option) {
  if (option.tagName === 'TD') {
    const selectRow = option.parentNode;
    selectRow.classList.toggle('tableRowBackGround');
  }
}
