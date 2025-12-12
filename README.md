# MyAllSupport

Pequeña página estática en español con un formulario de contacto que envía los datos a Formspree y un enlace directo a la agenda de Calendly.

## Estructura
- `index.html`: tarjeta centrada con formulario (`nombre`, `email`, `mensaje`) y enlace a Calendly.
- `CNAME`: dominio personalizado para despliegue (p. ej. GitHub Pages).

## Cómo usarlo
1) Clona o descarga el repositorio.  
2) Abre `index.html` en tu navegador para verlo localmente.  
3) Ajusta el `action` del formulario en `index.html` si quieres usar otra clave de Formspree.  
4) (Opcional) Cambia el enlace de Calendly en el mismo archivo si usas otra agenda.

## Despliegue rápido
- En GitHub Pages basta con colocar los archivos en la rama `main` o `gh-pages`; el `CNAME` fijará el dominio personalizado.
- En cualquier hosting estático (Netlify, Vercel, etc.) solo necesitas publicar `index.html` y `CNAME` si aplicara.

## Personalización básica
- Estilos en línea dentro de `index.html`. Puedes moverlos a un `.css` si crece el sitio.
- Cambia colores o tipografía editando los selectores `body`, `.card`, `input`, `textarea` y `button`.
