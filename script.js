console.log('Add validation!');

const dayrate = 5;
const wRate = 7;




let parkForm = document.getElementById('parking-form');
let footer = document.querySelector('footer');
parkForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newElement = document.createElement("p");
    
    const days = document.querySelector('#days').value;
    const start = document.querySelector('#start-date').value;
    console.log(start);
   
    let cost = rate(days, start);
    let text = document.createTextNode(`The price is $${cost}`);
    newElement.appendChild(text);
    footer.appendChild(newElement);

});

function rate(days, start) {
    const startDate = new Date(start);
    console.log(`start: ${start}`);

    let begin = startDate.getDay();
    console.log(begin);
    let weekendDays = 0;
    let weekDays = days - weekendDays;
    for (let i=0; i<days;i++) {
    
        if (begin % 7 ===0 ||begin %7 === 6) {
            weekendDays++;
        }
        begin++;
    }
    return (weekDays*dayrate) + (weekendDays *wRate)
}

// CC Validation function
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}