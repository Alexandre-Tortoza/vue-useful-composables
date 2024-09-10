const formatarTelefone = (telefone) => {
    if (telefone == 'Sem') {
        return 'Telefone Não Infromado';
    } else{
        const telefoneLimpo = telefone.replace(/\D/g, '');

        const telefoneFormatado = telefoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        return telefoneFormatado;
    }

};

export default formatarTelefone;
