# Guía de Despliegue - myAllSupport

## 🚀 Opciones de Despliegue

Este proyecto es una landing page estática que puede desplegarse en múltiples plataformas sin necesidad de configuración compleja.

## 🌐 GitHub Pages (Recomendado)

### Configuración Inicial

1. **Navegar a Settings del Repositorio**
   - Ve a https://github.com/christianasmussenb/myallsupport/settings/pages

2. **Configurar Source**
   - Source: Deploy from a branch
   - Branch: `main` (o la rama que prefieras)
   - Folder: `/` (root)
   - Click en "Save"

3. **Acceder al Sitio**
   - URL: https://christianasmussenb.github.io/myallsupport/
   - El despliegue toma 1-2 minutos

### Dominio Personalizado (Opcional)

1. **Configurar DNS**
   ```
   Type: CNAME
   Name: www (o tu subdominio)
   Value: christianasmussenb.github.io
   ```

2. **Agregar en GitHub Pages**
   - En Settings > Pages > Custom domain
   - Agregar: `www.myallsupport.cl`
   - Habilitar "Enforce HTTPS"

## 📦 Netlify

### Despliegue desde GitHub

1. **Conectar Repositorio**
   - Ir a https://app.netlify.com/
   - "New site from Git"
   - Conectar con GitHub
   - Seleccionar repositorio `christianasmussenb/myallsupport`

2. **Configuración de Build**
   ```
   Build command: (vacío - no requiere build)
   Publish directory: / (o .)
   ```

3. **Deploy**
   - Click en "Deploy site"
   - URL generada automáticamente: `https://random-name.netlify.app`

### Dominio Personalizado

1. **Agregar Dominio**
   - Site settings > Domain management
   - Add custom domain: `myallsupport.cl`

2. **Configurar DNS**
   - Netlify proporciona registros DNS
   - Configurar en tu proveedor de dominios

### netlify.toml (Opcional)

Crear archivo `netlify.toml` en la raíz:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## ⚡ Vercel

### Despliegue Rápido

1. **Instalar Vercel CLI** (opcional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy desde CLI**
   ```bash
   cd /ruta/a/myallsupport
   vercel
   ```

### Despliegue desde GitHub

1. **Importar Proyecto**
   - Ir a https://vercel.com/new
   - Import Git Repository
   - Seleccionar `christianasmussenb/myallsupport`

2. **Configuración**
   ```
   Framework Preset: Other
   Build Command: (vacío)
   Output Directory: .
   ```

3. **Deploy**
   - Click en "Deploy"
   - URL: `https://myallsupport.vercel.app`

### vercel.json (Opcional)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 🗂️ Hosting Tradicional (cPanel, FTP)

### Subir Archivos

1. **Conectar por FTP**
   - Host: tu-servidor.com
   - Usuario: tu-usuario
   - Contraseña: tu-contraseña

2. **Subir Archivos**
   - Subir `index.html` a `public_html/`
   - Asegurarse de permisos correctos (644 para archivos)

3. **Configurar Dominio**
   - Apuntar dominio a la carpeta donde está `index.html`

### .htaccess (Opcional para Apache)

```apache
# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# Caché del navegador
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Seguridad
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

## 🐳 Docker (Opcional)

### Dockerfile

```dockerfile
FROM nginx:alpine

# Copiar archivos al servidor nginx
COPY index.html /usr/share/nginx/html/

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
```

### Construir y Ejecutar

```bash
# Construir imagen
docker build -t myallsupport .

# Ejecutar contenedor
docker run -d -p 8080:80 myallsupport

# Acceder
open http://localhost:8080
```

## 🔧 Uso Local

### Servidor Simple

**Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js**
```bash
npx serve .
```

**PHP**
```bash
php -S localhost:8000
```

### Abrir Directamente

1. Navegar a la carpeta del proyecto
2. Doble click en `index.html`
3. Se abre en el navegador predeterminado

⚠️ **Nota**: Algunas funcionalidades pueden no funcionar correctamente al abrir directamente desde el sistema de archivos (protocolo `file://`). Se recomienda usar un servidor local.

## ✅ Verificación Post-Despliegue

### Checklist

- [ ] Sitio carga correctamente
- [ ] Todas las fuentes se cargan (Google Fonts)
- [ ] Formulario de contacto funciona
- [ ] Botón de Calendly funciona
- [ ] Navegación funciona en móvil
- [ ] Scroll suave funciona
- [ ] No hay errores en la consola
- [ ] Meta tags se muestran correctamente (compartir en redes)
- [ ] Favicon aparece correctamente
- [ ] Tiempo de carga < 3 segundos

### Herramientas de Prueba

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse**: En Chrome DevTools
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## 🔐 Seguridad

### Headers de Seguridad Recomendados

```
Content-Security-Policy: default-src 'self' https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS

- ✅ **Obligatorio** para producción
- GitHub Pages, Netlify y Vercel incluyen SSL/TLS gratis
- Let's Encrypt para hosting tradicional

## 📊 Analytics (Opcional)

### Google Analytics

Agregar antes del cierre de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🆘 Solución de Problemas

### El sitio no se despliega

1. Verificar que `index.html` esté en la raíz
2. Verificar permisos de archivos
3. Revisar logs de despliegue

### Formulario no funciona

1. Verificar URL de Formspree
2. Confirmar que el form action es correcto
3. Verificar que el dominio esté en la lista blanca de Formspree

### Estilos no cargan

1. Verificar conexión a Google Fonts
2. Confirmar que CSS inline esté presente
3. Revisar consola del navegador

## 📞 Soporte

Para problemas de despliegue, contactar al equipo de desarrollo o crear un issue en GitHub.
