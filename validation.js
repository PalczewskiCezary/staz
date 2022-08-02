export const showError = (input, message) => {
    const formitem = input.parentElement;
    formitem.classList.remove('success');
    formitem.classList.add('error');
    error.textContent = message;
    return {
        error: error
    }
};
export const showSuccess = (input) => {
    const formitem = input.parentElement;
    formitem.classList.remove('error');
    formitem.classList.add('success');
    error.textContent = '';
    return {
        error: error
    }
}
export const isRequired = value => value === '' ? false : true;
export const isBetween = (length, min, max) => length < min || length > max ? false : true;