function numid(){
    return Math.floor(Math.random()*(1000002 - 1 + 1)) + 1;
  }
  
    document.getElementById('formCap').addEventListener('submit', saveClient);

    function saveClient(e) {
      let nombre = document.getElementById('nombre').value;
      let apellido = document.getElementById('apellido').value;
      let zona = document.getElementById('zona').value;
      let idTemp = numid();

      const clientId = idTemp+numid();
      if(nombre !== '' && apellido !== ''){
        let cliente = {
         id: clientId,
         nombre: nombre.toUpperCase(),
         apellido: apellido,
         zona: zona,
         };
  
         if (localStorage.getItem('clientlst') === null || localStorage.getItem('clienLst') === [] || localStorage.getItem('clientLst') === undefined ){
          let clientlst = [];
          clientlst.push(cliente);
          localStorage.setItem('clientlst', JSON.stringify(clientlst));
        } else {
          let clientlst = JSON.parse(localStorage.getItem('clientlst'));
          clientlst.push(cliente);
          localStorage.setItem('clientlst', JSON.stringify(clientlst));
        }

     getClient()
     document.getElementById('formCap').reset();
     e.preventDefault();
    }
 
  };



function getClient() {

    let clientGet = JSON.parse(localStorage.getItem('clientlst'));
    let clientView = document.getElementById('personsList');

    clientView.innerHTML = '';

    for (let i = 0; i < clientGet.length; i++){

        let id = clientGet[i].id;
        let nombre = clientGet[i].nombre;
        let apellido = clientGet[i].apellido;
        let zona = clientGet[i].zona;
        

       clientView.innerHTML += '<div class="card-body text-white bg-secondary mb-3">' +
       '<h5 class="card-title">'+id+'&nbsp;&nbsp;'+nombre+'&nbsp;&nbsp;'+apellido+'</h5>' +
       '<p class="card-text">'+zona+'</p>' +
       '<a href="#" class="btn btn-primary" onclick="delClient('+id+')">Eliminar</a>' +
       '<a href="#" class="btn btn-danger" data-toggle="modal" data-target="#formCap">Editar</a>' +
     '</div>'

    } 
}

  function delClient(id) {
     let clientlst = JSON.parse(localStorage.getItem('clientlst'));
      for(let i = 0; i < clientlst.length; i++){
          if (clientlst[i].id === id) {
          clientlst.splice(i,1);
        }
    
      localStorage.setItem('clientlst', JSON.stringify(clientlst));
      getClient()

    }

}
 
    
  
