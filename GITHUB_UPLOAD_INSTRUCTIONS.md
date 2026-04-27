# Instrucciones para subir a GitHub

Repositorio destino:

```text
https://github.com/Cescalanteu/no-estas-solo-maxi.git
```

## Opcion A: Subir desde la web de GitHub

1. Abre el repositorio en GitHub.
2. En la pagina principal del repositorio, presiona `Add file`.
3. Elige `Upload files`.
4. Abre en Windows la carpeta:

```text
_github_upload\no-estas-solo-maxi
```

5. Selecciona todo el contenido de esa carpeta y arrastralo a GitHub.
6. No subas el ZIP como unico archivo, porque GitHub no lo descomprime como codigo del repositorio.
7. En `Commit changes`, escribe:

```text
Initial story PWA
```

8. Presiona `Commit changes`.

## Opcion B: Publicar con GitHub Desktop

1. Instala y abre GitHub Desktop.
2. Inicia sesion con tu cuenta de GitHub.
3. Clona este repositorio vacio:

```text
https://github.com/Cescalanteu/no-estas-solo-maxi.git
```

4. Copia todo el contenido de `_github_upload\no-estas-solo-maxi` dentro de la carpeta clonada.
5. En GitHub Desktop, escribe el mensaje:

```text
Initial story PWA
```

6. Presiona `Commit to main`.
7. Presiona `Push origin`.

## Activar GitHub Pages

1. En GitHub, abre el repositorio.
2. Ve a `Settings`.
3. Ve a `Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Ve a la pestana `Actions`.
6. Espera a que termine `Deploy to GitHub Pages`.
7. Vuelve a `Settings > Pages` y abre la URL publica.

## Nota

El proyecto ya incluye el workflow `.github/workflows/deploy-pages.yml`, por lo que GitHub Pages se construye automaticamente al subir cambios a `main`.
