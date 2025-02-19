
Introduccion

Este frontend está desarrollado con React.js y sigue una arquitectura basada en componentes reutilizables. Su estructura separa los componentes en dos carpetas principales:

components/ Contiene elementos reutilizables como formularios, tablas y la barra de navegación.
pages/  Define las vistas principales de la aplicación, como la gestión de artículos, validación y actualización de datos.
El punto de entrada es App.js, donde probablemente se configuran las rutas y la estructura general. También incluye archivos clave como index.js (para renderizar la aplicación) y App.css (para los estilos globales).

Instalación de dependencias

Ejecutar el siguiente comando en la raíz del proyecto:

npm install

Ejecución del servidor

npm start

Carpeta src/ (Código fuente)

Subcarpetas:

1.	components/ → Contiene componentes reutilizables.
o	AddPriceForm.js → Formulario para agregar precios.
o	Navigation.js → Barra de navegación.
o	ProductSpecial.js → Componente relacionado con productos especiales.
o	ProductTable.js → Tabla de productos.
o	UpdatePriceForm.js → Formulario para actualizar precios.
o	ValidatePrice.js → Validación de precios.
2.	pages/ → Páginas principales del sitio.
o	Article.js y ArticleSpecial.js → Posiblemente muestran artículos.
o	Update.js → Página de actualización.
o	Upload.js → Página de subida de archivos.
o	Validate.js → Página para validación.
3. Otros archivos importantes:
•	App.js → Componente principal donde se gestionan rutas y estructura general.
•	App.css → Estilos globales.
•	index.js → Punto de entrada donde se renderiza App.js.
•	package.json → Contiene dependencias del proyecto.
