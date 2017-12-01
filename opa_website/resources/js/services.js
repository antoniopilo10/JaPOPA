/*Services facade to connect to backend*/
var baseUrl = "http://localhost:3000";

// GUIA BASICA DE USO DE JSON SERVER
// http://www.betterpixels.co.uk/projects/2015/05/09/mock-up-your-rest-api-with-json-server/

// GET
// Obtiene un recurso del servidor (usuario, carrito, etc)
// El recurso a obtener se especifica mediante la url
// Ej: Si queremos obtener un usuario con id=1 hacemos un GET a la url: /users/1
function read(resourceUrl, callback) {
    $.ajax({
        url: returnRequestUrl(resourceUrl),
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {        
        callback(data);
    });
}

//POST
// Modifica un recurso (usuario, carrito, etc)
// En nuestro caso agrega un recurso.
// En la url especificamos donde esta el recurso a agregar, 
// y en resourceData definimos los valores del mismo
function create(resourceUrl, resourceData, callback) {
    $.ajax({
        url: returnRequestUrl(resourceUrl),
        contentType: "application/json",
        data: resourceData,
        type: 'POST'
    }).done(function(data) {
        callback(data);
    });
}

// PUT 
// Edita un recurso (usuario, carrito, etc)
// En nuestro caso cambia los valores de un recurso.
// En la url especificamos donde esta el recurso a editar, 
// y en resourceData definimos los valores del recurso editado
function update(resourceUrl, id, resourceData,callback) {
    $.ajax({
        url: returnRequestUrl(resourceUrl + "/" + id),
        contentType: "application/json",
        data: resourceData,
        type: 'PUT'
    }).done(function(data) {
        callback(data);
    });
}

// DELETE 
// Elimina un recurso (usuario, carrito, etc)
// En la url especificamos la ruta del recurso a eliminar
// en el id mandamos el recurso especifico a borrar
function remove(resourceUrl, id,callback) {
    $.ajax({
        url: returnRequestUrl(resourceUrl + "/" + id),
        contentType: "application/json",
        type: 'DELETE'
    }).done(function(data) {
        callback(data);
    });
}

function returnRequestUrl(resourceUrl) {
    return baseUrl + resourceUrl;
}

