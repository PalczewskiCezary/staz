export const showError = (input, message) => {
    const formitem = input.parentElement;
    formitem.classList.remove('success');
    formitem.classList.add('error');
    error.textContent = message;
    return {
        error: error
    }
};