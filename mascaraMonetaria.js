const mascaraMonetaria = (value) => {
    value = value.replace(/\D/g, '');
    if (value.length === 0) {
        return '';
    }
    
    value = parseInt(value).toString();
    if (value.length < 3) {
        value = value.padStart(3, '0');
    }

    value = value.slice(0, -2) + ',' + value.slice(-2);
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return 'R$ ' + value;
};

export default mascaraMonetaria;
