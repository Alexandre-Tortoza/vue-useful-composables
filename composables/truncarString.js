const truncarString = (string, tamanho) => {
    if (string.length <= tamanho) {
        return string;
    }
    return string.slice(0, tamanho) + '...';
};

export default truncarString;
