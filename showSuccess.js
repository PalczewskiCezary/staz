export const showSuccess = (input) => {
    const formitem = input.parentElement;
    formitem.classList.remove('error');
    formitem.classList.add('success');
    error.textContent = '';
    return {
        error: error
    }
}