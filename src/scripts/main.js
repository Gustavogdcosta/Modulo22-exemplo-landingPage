AOS.init();

const dataDoEvento = new Date("Mar 23, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000*60*60*24));
    const horasAteOevento = Math.floor((distanciaAteOEvento % (1000*60*60*24)) / (1000*60*60));
    const minutosAteOevento = Math.floor((distanciaAteOEvento % (1000*60*60)) / (1000*60));
    const segundosAteOevento = Math.floor((distanciaAteOEvento % (1000*60)) / (1000));

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    } 

}, 1000);