# No estas solo, Maxi - cuento visual PWA

Aplicacion web/PWA de lectura visual para iPad. Es una adaptacion pedagogica original, basada en fuentes publicas disponibles, y no reemplaza la lectura del libro original.

## Contenido

- 10 slides cargados desde `src/data/slides.ts`.
- Imagenes principales en `public/story-images/`, con SVGs originales de respaldo en `src/assets/slides/`.
- Lectura en voz alta con Web Speech API, siempre iniciada por boton.
- Modo adulto con notas, fuentes publicas y tabla completa de adaptacion.
- Manifest y service worker para instalacion como PWA y lectura offline basica.

## Correr localmente

```bash
npm install
npm run dev
```

En Windows, si PowerShell bloquea `npm` por politica de scripts, usa:

```bash
npm.cmd install
npm.cmd run dev
```

## Compilar y revisar

```bash
npm run build
npm run preview
```

Para revisar la version de produccion en esta PC:

```bash
npm run build
node scripts/serve-dist.mjs 4173
```

Luego abre `http://localhost:4173/`.

## Publicar en GitHub Pages

Este repositorio incluye `.github/workflows/deploy-pages.yml`. Cada vez que subas cambios a la rama `main`, GitHub Actions compila la app y publica la carpeta `dist/` en GitHub Pages.

Pasos:

1. Crear un repositorio nuevo en GitHub.
2. Subir este proyecto a la rama `main`.
3. En GitHub, abrir `Settings > Pages`.
4. En `Build and deployment`, elegir `GitHub Actions`.
5. Esperar a que termine el workflow `Deploy to GitHub Pages`.
6. Abrir la URL publica que GitHub muestra en `Settings > Pages`.

## Probar en iPad

1. Abre la URL publica en Safari del iPad.
2. Toca Compartir.
3. Toca "Agregar a pantalla de inicio".
4. Abre la app desde el icono creado.

## Imagenes

La app funciona con las imagenes incluidas en `public/story-images/`. Los prompts para generar o rehacer imagenes estan en `image-prompts.json`.

Hay un script opcional en `scripts/generate-images.mjs`. Solo hace algo si defines una API externa compatible:

```bash
IMAGE_API_URL="https://tu-api.example/generate" IMAGE_API_KEY="..." node scripts/generate-images.mjs
```

## Fuentes publicas de referencia

- Loqueleo Peru: https://www.loqueleo.com/pe/libro/no-estas-solo-maxi
- Loqueleo Ecuador, muestra publica: https://www.loqueleo.com/ec/uploads/2021/03/lql-sm-no-estas-solo-maxi.pdf
- Educaplay, actividad escolar: https://es.educaplay.com/recursos-educativos/6734041-no_estas_solo_maxi.html

## Nota de derechos

Esta app no copia el texto del libro, no usa la portada oficial y no imita el estilo del ilustrador original. Las imagenes incluidas son recursos visuales originales usados como apoyo pedagogico.
