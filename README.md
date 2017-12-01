# OPA WebSite

Proyecto _Jovenes a Programar 2017_ - Matias Segade - Antonio Pilo
    Opa es una página web de ofertas. 

GUIA DE FOLDER/ARCHIVOS
-----------------------
    - opa_website
          -index.html   Pagina principal de la web
          -resources
                -css
                     -style.css   Estilado de toda la pagina
                -imagenes   Claramente contiene las imagenes utilizadas
                -js
                     -opa.js    Javascript que contiene reloj de ofertas, validaciones del formulario de registro, una funcion que al                                   hacer click en "Agregar al carrito" incrementa el valor en "Mi carrito" y un arreglo de fotos que se va                                 cambiando cada cierto tiempo (NOTA: esto estaba echo con jquery pero al agregar los articulos                                           dinamicamente dejó de funcionar y por simpleza volvimos a javascript). Tambien hay una funcion de jquery                                 a ser detallada en la proxima seccion. 
                     -productos.js    Mediante una llamada ajax, consume el API rest, obtiene el listado de productos y Despliega los                                           datos.
                     -services.js     "Services facade to connect to backend"
                -data
                     -info.json       Arreglo de json que contiene los productos (ofertas) a la espera de ser levantados por el servidor.
                 
FUNCIONALIDADES
---------------
    -Registro de usuario
                        Formulario para registro de usuario validado con required de html para que tenga que llenar todos los campos y con                         javascript, esto ultimo se utilizo para que el usuario no pueda poner una contraseña y una confirmacion de                                 contraseña distinta, para que al ingresar el dia de nacimiento y el año sean factibles por ejemplo no podes decir                         que naciste el 53 de octubre de 1803. Cada uno de estos errores mencionados si succede, el formulario no se envia                         y le sale un mensaje con el error pertinente cometido por el usuario.
                        Por ultimo, si todos los campos estan completos correctamente, al dar click "Crear Cuenta"  
                        
                        
                        
 
        
