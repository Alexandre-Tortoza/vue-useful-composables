const formatarHora = (horario) => {
    if (horario == null) {
        horario = '00:00:00';
    }
    const partes = horario.split(':');
    let horas = parseInt(partes[0], 10);
    let minutos = parseInt(partes[1], 10);
    let segundos = parseFloat(partes[2]);

    segundos = Math.floor(segundos);

    const horarioFormatado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    return horarioFormatado;
};

export default formatarHora;
