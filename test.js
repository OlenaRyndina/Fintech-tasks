/*написать функцию форматирования для суммы, пример:  "3123123.00" -> "3 123 123.00"*/

function sumFormat (num) {
	let newFormat,
	    integerRev = num.split('.')[0].split('').reverse().join(''),
	    start = 0,
	    integer = [];

	while(start <= integerRev.length) {
		integer.push(integerRev.substr(start, 3).split('').reverse().join(''));
		start += 3;
	}

	newFormat = integer.reverse().join(' ') + '.' + num.split('.')[1];
	

    console.log(newFormat);
    return newFormat;
}

sumFormat("3123123.00");
sumFormat("31231237.00");
sumFormat("312312375.00");

/*сделать маску ввода на инпуте например для суммы с копейками *.00 
(если отличается от маски то не вводится ничего) 
Вместо  * любое количество цифр, там где 00 (это две любые цифры)*/

let input = document.querySelector('input.input-totalSum');

function maskKeydownTotalSum(event) {
            // Permission: backspace, delete, tab, escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
            // Permission: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
            // Permission: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                // do nothing
                 return;
        }

    if (event.keyCode && (event.keyCode < 48 || event.keyCode > 57)) {
 	    event.preventDefault();
    }
};

function maskInputTotalSum (event) {
	let inputValue;

	if (input.value[0] === '*') {
        inputValue = '0' + input.value.slice(1);
	} else {
		inputValue = input.value;
	}   

    input.value = parseFloat(inputValue).toFixed(2);
};

input.addEventListener('keydown', maskKeydownTotalSum);
input.addEventListener('input', maskInputTotalSum);


    
        
