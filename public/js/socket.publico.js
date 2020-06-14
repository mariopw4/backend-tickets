var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio2, lblEscritorio1, lblEscritorio3, lblEscritorio4];


socket.on('estadoActual', function(data) {
    console.log(data);
    actualizaHTML(data.cuatroUltimos);
});
socket.on('cuatroUltimos', function(data) {
    /* var audio = new Audio('audio/new-ticket.mp3');
    audio.play(); */
    actualizaHTML(data.cuatroUltimos);
});

function actualizaHTML(cuatroUltimos) {
    for (var i = 0; i <= cuatroUltimos.length - 1; i++) {
        lblTickets[i].text('Ticket ' + cuatroUltimos[i].numero);
        lblEscritorios[i].text('Escritorio ' + cuatroUltimos[i].escritorio);
    }
}