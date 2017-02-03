// Takes a phone number and determines if it is correctly formatted. Returns the phone number in a normalized format.

function formatter(input) {
  let formatted = input.match(/\d/g);

  if (formatted.length > 10) {
    formatted.splice(0, 1);
  }
  formatted.splice(3, 0, '-');
  formatted.splice(7, 0, '-');

  return formatted.join('');
}

function convertPhone(number) {
  let input1 = /^\d{3}\-\d{3}\-\d{4}$/.test(number);         // 555-555-5555
  let input2 = /^\d{3}\s\d{3}\s\d{4}$/.test(number);         // 555 555 5555
  let input3 = /^\(\d{3}\)\d{3}\-\d{4}$/.test(number);       // (555)555-5555
  let input4 = /^\d{3}\s\d{3}\-\d{4}$/.test(number);         // 555 555-5555
  let input5 = /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(number);     // (555) 555-5555
  let input6 = /^\d\-\d{3}\-\d{3}\-\d{4}$/.test(number);     // 1-555-555-5555
  let input7 = /^\(\d\)\d{3}\-\d{3}\-\d{4}$/.test(number);   // (1)555-555-5555
  let input8 = /^\(\d\)\s\d{3}\-\d{3}\-\d{4}$/.test(number); // (1) 555-555-5555
  let input9 = /^\d{10}$/.test(number);                      // 5555555555
  let input10 = /^\d{11}$/.test(number);                     // 15555555555


  if (input1) {
    return number;

  } else if (input2) {
    return formatter(number);

  } else if (input3) {
    return formatter(number);

  } else if (input4) {
    return formatter(number);

  } else if (input5) {
    return formatter(number);

  } else if (input6) {
    return formatter(number);

  } else if (input7) {
    return formatter(number);

  } else if (input8) {
    return formatter(number);

  } else if (input9) {
    return formatter(number);

  } else if (input10) {
    return formatter(number);

  } else {
    return 'Invalid number';
  }
}

// var number = '555-555-5555';
var number = '555 555 5555';
// var number = '(555)555-5555';
// var number = '555 555-5555';
// var number = '(555) 555-5555';
// var number = '1-555-555-5555';
// var number = '(1)555-555-5555';
// var number = '(1) 555-555-5555';
// var number = '5555555555';
// var number = '15555555555';
convertPhone(number);
