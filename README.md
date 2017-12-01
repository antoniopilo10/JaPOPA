# OPA WebSite

Proyecto _Jovenes a Programar 2017_ - Matias Segade - Antonio Pilo

Opa es una página web de ofertas tales como restaurantes, estetica, hoteles, viajes, etc.

GUIA DE FOLDER/ARCHIVOS
-----------------------
    - opa_website
          -index.html   Pagina principal de la web
          -resources
                -css
                     -style.css   Estilado de toda la pagina
                -imagenes   Claramente contiene las imagenes utilizadas
                -js
                     -opa.js    Javascript que contiene reloj de ofertas, validaciones del formulario de registro, una funcion que al
                                hacer click en "Agregar al carrito" incrementa el valor en "Mi carrito" y un arreglo de fotos que se va 
                                cambiando cada cierto tiempo (NOTA: esto estaba echo con jquery pero al agregar los articulos
                                dinamicamente dejó de funcionar y por simpleza volvimos a javascript). Tambien hay una funcion de jquery 
                                a ser detallada en la proxima seccion.
        
                     -productos.js    Mediante una llamada ajax, consume el API rest, obtiene el listado de productos y despliega los 
                                      datos.
                     -services.js     "Services facade to connect to backend"
                -data
                     -info.json       Arreglo de json que contiene los productos (ofertas) a la espera de ser levantados por el  
                                      servidor.
                 
FUNCIONALIDADES
---------------
    -Registro de usuario
                        Formulario para registro de usuario validado con required de html para que el usuario esté obligado a llenar 
                        todos los campos.
                        Y con javascript, esto se utilizo para que el usuario no pueda poner una contraseña y una confirmacion de
                        contraseña distinta, para que al ingresar el dia de nacimiento y el año sean factibles por ejemplo no podes
                        decir que naciste el 53 de octubre de 1803. Cada uno de estos errores mencionados si succede, el formulario no
                        se envia y le sale un mensaje con el error pertinente cometido por el usuario.
                        Por ultimo, si todos los campos estan completos correctamente, al dar click en "Crear Cuenta" se oculta el
                        formulario y aparece un mensaje informando que el registro fue realizado correctamente.
    - Ademas de lo menciononado en la seccion anterior
                        Tenemos una flecha que aparece al bajar en la pagina, que al apretarla te desplaza hacia arriba.
    - Los articulos están cargados dinamicamente desde un arreglo de json, utilizando json server.
    
RECURSOS INTERNOS
-----------------
    -JSON 
          Como fue mencionado en la seccion (1), dentro de la carpeta data, está el archivo info.json que contiene un arreglo de json
          con los articulos detallados por id, name, descripcion, imagen y precio.
    -AJAX
          Como tambien fue mencionado en la seccion (1) es utilizado en el archivo productos.js y en services.js
          para consumir el API rest.
          
LIBRERIAS UTILIZADAS
--------------------
    -JQUERY
           Fue utilizado para la flecha mencionada en la seccion (2).
    -BOOSTRAP
           Solamente se utilizó para el boton "Agregar al carrito", con la clase "btn".
           
RECURSOS EXTERNOS UTILIZADOS
----------------------------
    Principalmente nos inspiramos observando paginas web como: Woow, Tienda Mia y Amazon.
    Tambien extrajimos ideas de http://www.falconmasters.com/ y https://www.w3schools.com/
    Ademas de las diapositivas presentadas en el curso y los trabajos practicos realizados.
    Todas las imagenes fueron extraidas de distintas paginas web, a excepcion del logo que fue realizado por nosotros.
    
INSTRUCTIVO DE USO DE JSON SERVER
---------------------------------
    Descargar https://nodejs.org/es/download/
    Luego de instalarlo, entrar a la consola del mismo.
    Utilizar el comando cd y el lugar donde descargaste la carpeta y pulsamos enter
    Por ejemplo: cd C:\Users\Ceibal\Documents\GitHub\JaPOPA\opa_website
    Por ultimo levantamos el servidor con el siguiente comando:
    node .\node_modules\json-server\bin\index.js .\data\info.json
    Con esto lo que hicimos fue cargar dinamicante los articulos en venta.
    Ya por ultimo solo queda ingresar a index.html y navegar en nuestra pagina
                                
                        
                        
                        
 
        
