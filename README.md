# React Gifs App

Aplicación web basada en el proyecto GifsApp del curso de "React: De cero a experto" de DevTalles en Udemy.

Se trata de un proyecto React creado utilizando Vite con TypeScript + SWC.

Utiliza la API de Giphy Developers para obtener gifs.

## Aspectos analizados

En este proyecto se abordan la estructuración de proyectos de React:
- Peticiones HTTP
- Debounce
- Manejo de estado
- Comunicación entre componentes
- useEffect
- Variables de entorno
- Fuentes personalizadas
- Hooks personalizados
- DevTools de React
- useRef
- Generar versión de producción
- Separación de responsabilidades

También se hace una introducción a las pruebas autpmáticas de aplicaciones React con Vitest:
- Pruebas sobre hooks
- Pruebas sobre hooks personalizados
- Pruebas con tareas asíncronas
- Pruebas con tareas que involucran timeouts
- Pruebas con Axios
- Integrar el testing en el proceso de construcción
- Espías
- Escribir funciones para las pruebas
- Manejo de excepciones

## Instalación y ejecución del proyecto

Descargar las dependencias con `npm install`.

Iniciar la aplicación con `npm run dev`.

### Pruebas

Ejecutar las pruebas con `npm run test`.

Visualizar las pruebas en el navegador con `npm run test:ui`.

Efectuar el informe de cobertura con `npm run coverage`.

### Versión de producción

Construir la aplicación con `npm run build`.

Probar la aplicación con `http-server -o` desde la carpeta dist.

## Instalaciones de paquetes necesarios

Axios se instala con `npm install axios`.

http-server se instala con `npm install --global http-server`

### Dependencias para pruebas

[Vitest](https://vitest.dev/guide/) se instala con el comando:
 ```bash
npm install --save-dev vitest jsdom
```

React [Testing Library](https://testing-library.com/docs/react-testing-library/intro) se instala con:
```bash
npm install --save-dev @testing-library/react @testing-library/dom
```

En el archivo `package.json`debe incluirse:
```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```

También hay que configurar el archivo `vite.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
```
