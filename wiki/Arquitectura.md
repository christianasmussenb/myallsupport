# Arquitectura del Proyecto myAllSupport

## 📁 Estructura del Proyecto

```
myallsupport/
├── index.html          # Archivo principal del sitio web
├── README.md           # Documentación básica del proyecto
├── Nueva-Version.md    # Recomendaciones de diseño para PyMEs
├── LICENSE             # Licencia MIT del proyecto
└── wiki/               # Documentación wiki del proyecto
    ├── Home.md
    ├── Arquitectura.md
    ├── Despliegue.md
    ├── Personalizacion.md
    ├── Servicios.md
    ├── Contacto.md
    └── Contribucion.md
```

## 🏗️ Diseño Técnico

### Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos modernos con variables CSS y gradientes
- **JavaScript Vanilla**: Interactividad sin dependencias
- **Google Fonts**: Tipografías Manrope y PT Serif

### Características del Diseño

#### 1. **Diseño Responsivo**
- Mobile-first approach
- Breakpoints para tablet y desktop
- Navegación adaptativa

#### 2. **Paleta de Colores**
```css
:root {
  --bg: #070c1c;          /* Fondo principal */
  --bg-2: #0d1835;        /* Fondo secundario */
  --card: #101c36;        /* Tarjetas */
  --card-2: #0f274a;      /* Tarjetas alternativas */
  --accent: #49d3c8;      /* Color de acento principal */
  --accent-2: #4d7bff;    /* Color de acento secundario */
  --text: #e9f1ff;        /* Texto principal */
  --muted: #a6b7d6;       /* Texto secundario */
  --border: #1c2b4f;      /* Bordes */
}
```

#### 3. **Componentes Principales**

##### Header Sticky
- Navegación fija en la parte superior
- Efecto de vidrio esmerilado (backdrop-filter)
- Logo y enlaces de navegación

##### Hero Section
- Título principal con propuesta de valor
- Subtítulo descriptivo
- Call-to-Action (CTA) destacado
- Indicador de scroll animado

##### Tarjetas de Propuesta de Valor
- Grid responsivo de 3 columnas
- Iconos SVG personalizados
- Animaciones al hover

##### Sección de Pasos
- Proceso de 3 pasos numerados
- Timeline visual con conectores
- Descripciones claras

##### Sección de Clientes
- Carrusel de testimonios
- Logos de empresas (placeholder)
- Citas destacadas

##### Sección de Noticias
- Grid de artículos
- Imágenes de cabecera
- Enlaces a contenido completo

##### Footer
- Información corporativa multi-país
- Enlaces a redes sociales
- Copyright y atribución

## 🎨 Sistema de Diseño

### Tipografía

- **Títulos**: PT Serif (serif, elegante)
- **Cuerpo**: Manrope (sans-serif, moderna y legible)
- Jerarquía clara: H1 (52px) → H2 (42px) → H3 (28px)

### Espaciado

- Padding consistente: 80px-120px entre secciones
- Márgenes internos: 20px en móvil, 40px en desktop
- Contenedor máximo: 1200px

### Efectos Visuales

- **Gradientes**: Fondos con gradientes radiales sutiles
- **Sombras**: Box-shadows suaves para profundidad
- **Transiciones**: Animaciones suaves (0.2s - 0.4s)
- **Hover Effects**: Transformaciones y cambios de color

## 🔌 Integraciones

### Formspree
- Formulario de contacto conectado a: `https://formspree.io/f/xeoyrnwz`
- Validación HTML5 nativa
- Envío asíncrono (puede mejorarse con JS)

### Calendly
- Botón de agendar reunión
- URL: Configurable en el código

### Google Fonts
- Carga optimizada con preconnect
- Subconjuntos específicos para español

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Dispositivos iOS y Android
- ✅ Tablets y móviles

## 🎯 Optimizaciones

### Performance
- **Sin dependencias externas**: Todo el CSS y JS está inline
- **Fuentes optimizadas**: Preconnect y display=swap
- **SVG en línea**: Favicon y algunos iconos
- **Imágenes optimizadas**: Usar formatos WebP cuando sea posible

### SEO
- Meta tags completos (description, og:tags, twitter:card)
- Estructura semántica HTML5
- URLs limpias y descriptivas
- Contenido en español para audiencia latinoamericana

### Accesibilidad
- Contraste adecuado (WCAG AA)
- Navegación por teclado
- Alt texts en imágenes
- Etiquetas semánticas

## 🚀 Flujo de Usuario

1. **Entrada** → Usuario llega a la landing page
2. **Hero** → Captura atención con propuesta de valor
3. **Beneficios** → Muestra por qué elegir myAllSupport
4. **Proceso** → Explica cómo funciona el servicio
5. **Prueba Social** → Testimonios de clientes
6. **Educación** → Noticias y recursos
7. **Conversión** → Formulario de contacto o agendar reunión

## 🔄 Actualizaciones Futuras

Consultar el archivo [Nueva-Version.md](../Nueva-Version.md) para recomendaciones detalladas sobre:
- Estructura de navegación mejorada
- Páginas de servicios individuales
- Sistema de blog integrado
- Calculadora de ahorros
- Chat en vivo con WhatsApp
- Casos de estudio detallados
