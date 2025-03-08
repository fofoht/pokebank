// Funcion para manejar el depósito
document.getElementById('form-deposito')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var monto = document.getElementById('monto-deposito').value;
  
    if (monto && monto > 0) {
      Swal.fire({
        title: 'Depósito Exitoso',
        text: 'Has depositado $' + monto,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        window.location.href = 'acciones.html';
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un monto válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  });
  


  // Funcion para manejar el retiro
  document.getElementById('form-retiro')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var monto = document.getElementById('monto-retiro').value;
  
    if (monto && monto > 0) {
      Swal.fire({
        title: 'Retiro Exitoso',
        text: 'Has retirado $' + monto,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        window.location.href = 'acciones.html';
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un monto válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  });
  

  // Funcion para manejar el pago de servicios
document.getElementById('form-servicios')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var servicio = document.getElementById('tipo-servicio').value;
    var monto = document.getElementById('monto-servicio').value;
  
    if (servicio && monto && monto > 0) {
      Swal.fire({
        title: 'Pago Exitoso',
        text: 'Has pagado $' + monto + ' por el servicio de ' + servicio,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        window.location.href = 'acciones.html';
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un servicio y un monto válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  });
  

  // Funcion para consultar el saldo
document.addEventListener('DOMContentLoaded', function() {
  var saldoActual = 1500.00; // Ejemplo de saldo actual, este valor puede ser dinámico más adelante
  var saldoContainer = document.getElementById('saldo-actual');
  
  // Mostrar el saldo actual en la pantalla
  if (saldoContainer) {
    saldoContainer.innerText = '$' + saldoActual.toFixed(2);
  }
});


// Funcion para la grafico
var ctx = document.getElementById('transaccionesChart').getContext('2d');
    var transaccionesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Depósito', 'Retiro', 'Pago de Servicios', 'Consulta de Saldo'],
        datasets: [{
          label: 'Cantidad de Transacciones',
          data: [5, 3, 2, 1],
          backgroundColor: ['#28a745', '#dc3545', '#ffc107', '#17a2b8']
        }]
      }
    });