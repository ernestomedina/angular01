# angular01
Ejemplo de configuración básica de AngularJS en un proyecto ASPNET5 con VisualStudio2015

# Estructura


```
.
├── Controllers                   
│   ├── StartController
│   └── UsersController
├── Views
│   └── Start
│       └── index.cshtml
└── wwwroot
    ├── app                   <---- angularjs : JS
    │   ├── home
    │   │   └── index.js
    │   ├── users
    │   │   ├── index.js
    │   │   └── detail.js
    │   ├── app.js            <-- app.js    : configuracion de angularjs (rutas y aplicación)
    │   └── models.js         <-- models.js : Servicios de acceso a Restful
    └── app_views             <---- angularjs : html views y templates
        ├── home
        │   └── index.js
        └── users
            ├── index.js
            └── detail.js

```
