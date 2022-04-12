export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) // adiciona 0 na frente quando só tem um digito
        .join(':')

    return timeString;
}
/*Função para formatar o tempo recebido em segundos(number) para hh:mm:ss*/ 
