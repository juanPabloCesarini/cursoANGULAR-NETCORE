### Comando para crear el proyecto
* ng new nombre_proyecto

### Para crear un componente
* ng g c carpeta/nombre_componente 
  * g: generate
  * c: component

### Para instalar bootstrap desde consola
* npm install bootstrap@next
Para configurar bootstrap agregar la siguiente linea en styles del archivo angular.json
"node_modules/bootstrap/dist/css/bootstrap.min.css"

* En el package.json las dependencias con @ adelante son las propias de angular

### Para instalar toastr desde consola
* npm install ngx-toastr --save
* Documentación: https://www.npmjs.com/package/ngx-toastr

### Para crear servicios
* ng g s carpeta/nombre_servicio
  * g: generate
  * s: service
