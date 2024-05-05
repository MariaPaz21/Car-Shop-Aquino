# Car Shop 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Descripción: Este Car Shop es un formulario desarrollado con el objetivo de enviar una orden de trabajo. El formulario recolecta información sobre el cliente, sobre el auto que recibirá el servicio y los servicios a escoger. Al final de la recolección de datos, una página con los datos necesarios aparece antes de enviar el formulario.

Desarrollo: El código funcional del Car Shop está dividido en diferentes archivos: App.jsx (main App function) y la carpeta de componentes. La carpeta de componentes contiene: PersonalInfo.jsx (información del cliente), CarInfo.jsx (información del vehículo), ServiceInfo.jsx (información de los servicios a escoger), toppings.jsx (lista de servicios a escoger), OrdenTrabajo.jsx (la orden final) y Form.jsx (código principal del formulario).

Despliegue: El sitio está desplegado con AWS y es público.
