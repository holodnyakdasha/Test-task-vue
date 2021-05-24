const checkEmptyField = (fieldValue) => {
    const errorMessage = 'Field is required';
    return fieldValue.length ? true : { message: errorMessage } ;
  }

const checkTextOnly = (fieldValue) => {
  /* eslint-disable-next-line */
  const rule = /^[A-Za-z ]*$/;
  const errorMessage = 'Enter text only';
  return rule.test(fieldValue) ? true : { message: errorMessage };
}

const checkEmail= (fieldValue) => {
   /* eslint-disable-next-line */
  const rule = /^\w+@\w+\.\w+$/;
  const errorMessage = 'Email is invalid';
  return rule.test(fieldValue) ? true : { message: errorMessage };
}

const checkPhoneNumber= (fieldValue) => {
   /* eslint-disable-next-line */
  const rule = /^[+]*[0-9][+ 0-9]*$/;
  const errorMessage = 'Enter numbers only';
  return rule.test(fieldValue) ? true : { message: errorMessage };
}

const checkPassword = (fieldValue) => {
   /* eslint-disable-next-line */
  const rule = /^(?=.{8,})(?=.*[@#$%^&+=\*]).*$/;
  const errorMessage = 'Password must be at least 8 characters length and contain at least 1 special character';
  return rule.test(fieldValue) ? true : { message: errorMessage };
}

export {
  checkEmptyField,
  checkTextOnly,
  checkEmail,
  checkPhoneNumber,
  checkPassword
}