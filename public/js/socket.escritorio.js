var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('Erl escritorio es necesario');
}

let label = $('small');
var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        if (resp == 'No hay tickets') {
            alert(resp);
            label.text(resp);
            return;
        }
        label.text('Ticket: ' + resp.numero);
    });
});