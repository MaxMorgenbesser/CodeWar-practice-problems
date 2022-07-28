// ATM machines allow 4 or 6 digit PIN codes and PIN
// codes cannot contain anything but exactly 4
// digits or exactly 6 digits.

function validatePIN(pin) {
  if (pin.length != 6 && pin.length != 4) {
    return false;
  } else if (!/^[0-9]+$/.test(pin)) {
    return false;
  } else {
    return true;
  }
}
console.log(validatePIN("1234"));
