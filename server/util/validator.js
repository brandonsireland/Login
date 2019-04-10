const Validator = require('validator');
const isEmpty = require('is-empty');

validateLoginInput = (data) => {
    let errors = {};

    // Converts empty fields to empty string
    validateEmptyData(data);

    // Validates Email
    validateEmail(errors, data);

    // Validate Password
    validatePassword(errors, data);

    return {
        errors,
        isValid: isEmpty(errors)
    };

};

validateRegisterInput = (data ) => {
    let errors = {};

    // Checks if data is empty and converts to empty string.
    validateEmptyData(data);

    // Validates Name
    if(Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    // Validates Email
    validateEmail(errors, data)

    // Validates Passwords
    validatePassword(errors, data)

    // Validates the second Password
    if(Validator.isEmpty(data.password_two)) {
        errors.password_two = 'Confirm Password field is required';
    }

    // Validates password Length
    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters"
    };

    // Validates that the passwords Match
    if(!Validator.equals(data.password, data.password_two)) {
        errors.password_two = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};

validateEmptyData = (data) => {

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_two = !isEmpty(data.password_two) ? data.password_two : '';

    return data;
};

validateEmail = (errors, data) => {

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is Invalid';
    };

    return errors;
};

validatePassword = (errors, data) => {

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    };

    return errors;
};


module.exports = {
    validateRegisterInput,
    validateLoginInput
}