# Guía de Personalización - myAllSupport

## 🎨 Personalización del Sitio

Esta guía te ayudará a personalizar el sitio web de myAllSupport según tus necesidades específicas.

## 🎭 Colores y Tema

### Cambiar Paleta de Colores

Los colores están definidos como variables CSS en el `:root`:

```css
:root {
  --bg: #070c1c;          /* Fondo principal - cambiar por tu color oscuro */
  --bg-2: #0d1835;        /* Fondo secundario */
  --card: #101c36;        /* Tarjetas */
  --card-2: #0f274a;      /* Tarjetas alternativas */
  --accent: #49d3c8;      /* Acento principal - tu color de marca */
  --accent-2: #4d7bff;    /* Acento secundario */
  --text: #e9f1ff;        /* Texto principal */
  --muted: #a6b7d6;       /* Texto secundario */
  --border: #1c2b4f;      /* Bordes */
}
```

**Ejemplo**: Para un tema azul corporativo:
```css
:root {
  --accent: #0066cc;      /* Azul corporativo */
  --accent-2: #004499;    /* Azul más oscuro */
}
```

### Crear Tema Claro

Para cambiar a un tema claro, modificar:

```css
:root {
  --bg: #ffffff;
  --bg-2: #f8f9fa;
  --card: #ffffff;
  --card-2: #f1f3f5;
  --accent: #0066cc;
  --accent-2: #004499;
  --text: #212529;
  --muted: #6c757d;
  --border: #dee2e6;
}
```

## 🔤 Tipografía

### Cambiar Fuentes

Ubicar en el `<head>`:

```html
<!-- Cambiar estas URLs -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet">
```

Opciones populares:
- **Moderna**: Inter, Poppins, Raleway
- **Elegante**: Playfair Display, Lora, Crimson Text
- **Corporativa**: Roboto, Open Sans, Lato

Actualizar en CSS:

```css
body {
  font-family: 'TuFuente', system-ui, -apple-system, sans-serif;
}
h1, h2, h3 {
  font-family: 'TuFuenteTitulos', serif;
}
```

### Ajustar Tamaños

```css
h1 { font-size: 52px; }  /* Cambiar según necesidad */
h2 { font-size: 42px; }
h3 { font-size: 28px; }
body { font-size: 18px; }
```

## 🖼️ Logo y Favicon

### Cambiar Logo

1. **Logo de texto** (actual):
```html
<div class="logo">
  <span>myAllSupport</span>
</div>
```

2. **Logo con imagen**:
```html
<div class="logo">
  <img src="tu-logo.png" alt="myAllSupport">
</div>
```

### Cambiar Favicon

Reemplazar el SVG inline en el `<head>`:

```html
<!-- Opción 1: Favicon PNG/ICO -->
<link rel="icon" type="image/png" href="favicon.png">

<!-- Opción 2: SVG personalizado -->
<link rel="icon" href="data:image/svg+xml,<svg>...</svg>">
```

## ✏️ Contenido

### Modificar Títulos y Textos

#### Hero Section
```html
<h1>Tu Título Principal Aquí</h1>
<p class="hero-desc">Tu descripción aquí</p>
```

#### Propuesta de Valor
```html
<h2>Tu Sección de Valor</h2>
<p>Tu descripción</p>
```

### Cambiar Números y Estadísticas

Buscar y modificar:
```html
<div class="stat-num">50%</div>
<div class="stat-label">Tu métrica</div>
```

## 📋 Formulario de Contacto

### Configurar Formspree

1. **Crear cuenta** en https://formspree.io/
2. **Crear nuevo formulario**
3. **Copiar el endpoint**
4. **Actualizar en el HTML**:

```html
<form action="https://formspree.io/f/TU-ID-AQUI" method="POST">
```

### Cambiar Campos del Formulario

Agregar campo de teléfono:
```html
<div>
  <label for="telefono">Teléfono</label>
  <input type="tel" name="telefono" id="telefono" required>
</div>
```

Agregar campo de empresa:
```html
<div>
  <label for="empresa">Empresa</label>
  <input type="text" name="empresa" id="empresa">
</div>
```

### Alternativas a Formspree

- **Netlify Forms**: Gratis con Netlify hosting
  ```html
  <form name="contact" method="POST" data-netlify="true">
  ```

- **Google Forms**: Embeber formulario
- **EmailJS**: JavaScript para enviar emails
- **Custom Backend**: API propia

## 📅 Calendario de Reuniones

### Configurar Calendly

1. Crear cuenta en https://calendly.com/
2. Configurar tipo de evento
3. Obtener URL de tu calendario
4. Actualizar en HTML:

```html
<a href="https://calendly.com/tu-usuario/reunion" class="btn">
  Agendar Reunión
</a>
```

### Alternativas a Calendly

- **Cal.com**: Open source
- **Acuity Scheduling**: By Squarespace
- **Doodle**: Coordinación de horarios

## 🌐 Información de Contacto

### Actualizar Direcciones

Buscar en el footer y actualizar:

```html
<div class="footer-address">
  <strong>🇨🇱 Chile</strong>
  Tu Dirección<br>
  Ciudad, Región, Código Postal
</div>
```

### Agregar Nuevo País

```html
<div class="footer-address">
  <strong>🇦🇷 Argentina</strong>
  Tu Dirección en Argentina<br>
  Ciudad, Provincia, CP
</div>
```

### Actualizar Datos de Contacto

```html
<p>
  <strong>Email:</strong> tu-email@ejemplo.com<br>
  <strong>Teléfono:</strong> +56 9 1234 5678
</p>
```

## 🔗 Redes Sociales

### Cambiar Enlaces

Buscar los enlaces sociales en el footer:

```html
<div class="social-links">
  <a href="https://linkedin.com/company/tu-empresa" target="_blank" rel="noopener">
    <!-- Icono LinkedIn -->
  </a>
  <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener">
    <!-- Icono Twitter -->
  </a>
  <!-- Agregar más según necesidad -->
</div>
```

### Agregar Nueva Red Social

```html
<a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener" aria-label="Instagram">
  <svg><!-- Icono Instagram --></svg>
</a>
```

## 📰 Sección de Noticias

### Agregar Artículo

```html
<article class="news-card">
  <div class="news-image">
    <img src="tu-imagen.jpg" alt="Descripción">
  </div>
  <div class="news-content">
    <span class="news-date">Tu Fecha</span>
    <h3>Título del Artículo</h3>
    <p>Resumen del artículo...</p>
    <a href="enlace-completo.html" class="news-link">Leer más →</a>
  </div>
</article>
```

### Conectar con Blog Real

Si tienes un blog en otra plataforma:

```html
<a href="https://tu-blog.com/articulo" class="news-link" target="_blank">
  Leer más →
</a>
```

## 👥 Testimonios de Clientes

### Agregar Testimonio

```html
<div class="testimonial-card">
  <p class="testimonial-text">
    "Tu testimonio aquí..."
  </p>
  <div class="testimonial-author">
    <strong>Nombre del Cliente</strong>
    <span>Cargo, Empresa</span>
  </div>
</div>
```

### Agregar Logo de Cliente

```html
<div class="client-logo">
  <img src="logo-cliente.png" alt="Cliente">
</div>
```

## 📱 Botón de WhatsApp

### Agregar Widget de WhatsApp

Antes del cierre de `</body>`:

```html
<a href="https://wa.me/56912345678?text=Hola, me interesa saber más sobre sus servicios" 
   class="whatsapp-float" 
   target="_blank" 
   rel="noopener">
  <svg><!-- Icono WhatsApp --></svg>
</a>

<style>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: transform 0.3s;
}
.whatsapp-float:hover {
  transform: scale(1.1);
}
.whatsapp-float svg {
  width: 32px;
  height: 32px;
  fill: white;
}
</style>
```

## 📊 Analytics

### Google Analytics 4

Agregar en el `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU-PIXEL-ID');
  fbq('track', 'PageView');
</script>
```

## 🔍 SEO

### Meta Tags Básicos

```html
<title>Tu Título | Tu Sitio</title>
<meta name="description" content="Tu descripción optimizada para SEO">
<meta name="keywords" content="palabra1, palabra2, palabra3">
```

### Open Graph (Redes Sociales)

```html
<meta property="og:title" content="Tu Título">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="https://tu-sitio.com/imagen.jpg">
<meta property="og:url" content="https://tu-sitio.com">
<meta property="og:type" content="website">
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Tu Título">
<meta name="twitter:description" content="Tu descripción">
<meta name="twitter:image" content="https://tu-sitio.com/imagen.jpg">
```

## 🎬 Animaciones

### Desactivar Animaciones

Para mejorar rendimiento o accesibilidad:

```css
* {
  animation: none !important;
  transition: none !important;
}
```

### Añadir Animaciones de Scroll

Usar bibliotecas como AOS (Animate On Scroll):

```html
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>

<!-- Usar en elementos -->
<div data-aos="fade-up">Contenido</div>
```

## 💡 Consejos de Personalización

1. **Hacer cambios incrementales**: Probar cada cambio antes de continuar
2. **Mantener backup**: Guardar copia del archivo original
3. **Usar comentarios**: Documentar cambios importantes
4. **Probar en móvil**: Verificar responsive después de cada cambio
5. **Validar HTML**: Usar https://validator.w3.org/
6. **Optimizar imágenes**: Usar WebP o JPEG optimizado
7. **Mantener consistencia**: Usar las mismas fuentes, colores y espaciados

## 🐛 Debugging

### Chrome DevTools

1. **F12** para abrir DevTools
2. **Elements**: Inspeccionar y editar HTML/CSS en vivo
3. **Console**: Ver errores JavaScript
4. **Network**: Verificar carga de recursos
5. **Lighthouse**: Auditoría de performance y SEO

### Herramientas Útiles

- **Can I Use**: Compatibilidad de navegadores
- **Color Contrast Checker**: Accesibilidad de colores
- **Google PageSpeed Insights**: Velocidad del sitio

## 📞 Soporte

Para más ayuda con personalizaciones, consultar:
- [Arquitectura del Proyecto](Arquitectura.md)
- [Guía de Despliegue](Despliegue.md)
- Crear un issue en GitHub
