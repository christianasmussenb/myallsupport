# Guía de Contribución - myAllSupport

## 🤝 Contribuir al Proyecto

¡Gracias por tu interés en contribuir al proyecto myAllSupport! Este documento proporciona pautas para contribuir al sitio web y su documentación.

## 🎯 Tipos de Contribuciones

Aceptamos diferentes tipos de contribuciones:

### 1. 🐛 Reportar Bugs
- Errores en el sitio web
- Enlaces rotos
- Problemas de diseño responsive
- Errores tipográficos
- Problemas de compatibilidad de navegadores

### 2. 💡 Sugerir Mejoras
- Nuevas funcionalidades
- Mejoras de UX/UI
- Optimizaciones de rendimiento
- Mejoras de accesibilidad
- Contenido adicional

### 3. 📝 Mejorar Documentación
- Correcciones en el wiki
- Traducciones
- Tutoriales y guías
- Ejemplos adicionales
- FAQs

### 4. 🎨 Diseño y Contenido
- Mejoras visuales
- Nuevos iconos o gráficos
- Optimización de imágenes
- Actualizaciones de copy/texto
- Mejoras de SEO

### 5. 🔧 Código
- Correcciones de bugs
- Nuevas características
- Refactorizaciones
- Optimizaciones de rendimiento

## 📋 Proceso de Contribución

### Para Reportar un Bug

1. **Verificar si ya existe**: Busca en Issues existentes
2. **Crear un Issue** con:
   - Título descriptivo
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Capturas de pantalla si aplica
   - Navegador y versión
   - Dispositivo (desktop/móvil)

**Template de Issue para Bugs**:
```markdown
**Descripción del Bug**
Descripción clara y concisa del problema.

**Pasos para Reproducir**
1. Ve a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Lo que debería suceder.

**Capturas de Pantalla**
Si aplica, agregar capturas.

**Entorno**
- Navegador: [ej. Chrome 120]
- Dispositivo: [ej. iPhone 14, Desktop]
- SO: [ej. Windows 11, iOS 17]
```

### Para Sugerir una Mejora

1. **Crear un Issue** con label `enhancement`
2. **Incluir**:
   - Descripción de la mejora
   - Justificación (por qué es necesaria)
   - Casos de uso
   - Mockups o bocetos si aplica
   - Impacto esperado

### Para Contribuir Código

1. **Fork del repositorio**
   ```bash
   # En GitHub, click en "Fork"
   ```

2. **Clonar tu fork**
   ```bash
   git clone https://github.com/TU-USUARIO/myallsupport.git
   cd myallsupport
   ```

3. **Crear una rama**
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   # o
   git checkout -b fix/correccion-bug
   ```

4. **Hacer cambios**
   - Editar archivos necesarios
   - Seguir guías de estilo (ver abajo)
   - Probar cambios localmente

5. **Commit**
   ```bash
   git add .
   git commit -m "Descripción clara del cambio"
   ```

6. **Push**
   ```bash
   git push origin feature/mi-nueva-caracteristica
   ```

7. **Crear Pull Request**
   - Ir a tu fork en GitHub
   - Click en "Pull Request"
   - Seleccionar rama base (main) y tu rama
   - Completar template de PR
   - Submit

## ✅ Checklist de Pull Request

Antes de enviar tu PR, verificar:

- [ ] El código funciona correctamente en local
- [ ] No hay errores en la consola del navegador
- [ ] El sitio es responsive (probar en móvil)
- [ ] Los cambios siguen la guía de estilo
- [ ] Se actualizó documentación si aplica
- [ ] Los commits tienen mensajes descriptivos
- [ ] Se probó en múltiples navegadores
- [ ] El formulario de contacto funciona (si se tocó)
- [ ] Los enlaces externos funcionan

## 📐 Guías de Estilo

### HTML

```html
<!-- Usar HTML5 semántico -->
<section>
  <h2>Título de Sección</h2>
  <p>Contenido...</p>
</section>

<!-- Siempre incluir atributos alt en imágenes -->
<img src="imagen.jpg" alt="Descripción clara">

<!-- Usar clases descriptivas -->
<div class="hero-section">
  <h1 class="hero-title">Título</h1>
</div>
```

### CSS

```css
/* Usar variables CSS existentes */
.mi-elemento {
  background: var(--card);
  color: var(--text);
}

/* Seguir estructura de nomenclatura existente */
.seccion-nombre {
  /* estilos */
}

.seccion-nombre-elemento {
  /* estilos del elemento */
}

/* Comentar secciones importantes */
/* === NUEVA FUNCIONALIDAD === */
.nueva-clase {
  /* estilos */
}
```

### JavaScript

```javascript
// Usar ES6+ cuando sea posible
const miVariable = 'valor';

// Comentar lógica compleja
// Calcular descuento basado en...
function calcularDescuento(precio) {
  return precio * 0.5;
}

// Usar nombres descriptivos
function abrirModalContacto() {
  // código
}
```

### Commits

Formato de mensajes de commit:

```
tipo: descripción breve

Descripción más detallada si es necesaria.
Explicar el "por qué" más que el "qué".

Fixes #123
```

**Tipos**:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan código)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

**Ejemplos**:
```
feat: agregar botón de WhatsApp flotante

Se agregó un botón flotante de WhatsApp en la esquina
inferior derecha para facilitar contacto directo.

Fixes #45
```

```
fix: corregir navegación móvil

El menú hamburguesa no se cerraba al hacer click
en un enlace. Se agregó evento de click para cerrar.

Fixes #78
```

## 🧪 Testing

### Testing Manual

Antes de enviar cambios, probar en:

**Navegadores**:
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (si tienes Mac)
- [ ] Edge (última versión)

**Dispositivos**:
- [ ] Desktop (1920x1080 o mayor)
- [ ] Laptop (1366x768)
- [ ] Tablet (768px width)
- [ ] Móvil (375px width - iPhone SE)

**Funcionalidad**:
- [ ] Navegación funciona
- [ ] Formulario se envía correctamente
- [ ] Links abren páginas correctas
- [ ] Botones tienen estados hover/active
- [ ] Scroll suave funciona
- [ ] No hay contenido cortado

### Herramientas de Validación

- **HTML Validator**: https://validator.w3.org/
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **Lighthouse**: En Chrome DevTools
- **WAVE**: https://wave.webaim.org/ (accesibilidad)

## 🎨 Assets y Recursos

### Imágenes

- **Formato**: WebP con fallback a JPG
- **Optimización**: Usar TinyPNG o ImageOptim
- **Tamaño máximo**: 500KB por imagen
- **Dimensiones**: Apropiadas al uso (no usar 4K para thumbnails)

### Fuentes

- Usar Google Fonts existentes (Manrope, PT Serif)
- Si agregas nueva fuente, justificar necesidad
- Incluir solo pesos necesarios

### Iconos

- Preferir SVG inline para iconos
- Usar biblioteca existente si es posible (Feather Icons)
- Asegurar que sean accesibles (title, aria-label)

## 📝 Documentación

### Actualizar el Wiki

Si tus cambios afectan:
- Estructura del proyecto → Actualizar `Arquitectura.md`
- Proceso de deploy → Actualizar `Despliegue.md`
- Opciones de personalización → Actualizar `Personalizacion.md`
- Servicios → Actualizar `Servicios.md`
- Contacto → Actualizar `Contacto.md`

### Documentar Nuevo Código

```javascript
/**
 * Descripción de la función
 * @param {string} parametro - Descripción del parámetro
 * @returns {boolean} Descripción del retorno
 */
function miFuncion(parametro) {
  // implementación
}
```

## 🚫 Qué NO Hacer

- ❌ No cambiar colores principales sin consenso
- ❌ No agregar librerías grandes sin justificación
- ❌ No modificar el formulario de Formspree
- ❌ No incluir información de contacto personal
- ❌ No agregar tracking sin discusión previa
- ❌ No hacer commits directos a `main`
- ❌ No incluir archivos grandes (>1MB)
- ❌ No copiar código sin atribución apropiada

## 🏆 Reconocimientos

Los contribuidores serán reconocidos en:
- Sección de Contributors en GitHub
- Mentions en releases notes
- Archivo CONTRIBUTORS.md (si existe)

## 📞 Preguntas

Si tienes preguntas sobre cómo contribuir:

1. Revisa Issues y PRs existentes
2. Lee la documentación del wiki
3. Crea un Issue con label `question`
4. Contacta a los maintainers

## 📜 Código de Conducta

### Nuestro Compromiso

Crear un ambiente abierto, acogedor y respetuoso para todos.

### Comportamiento Esperado

- ✅ Ser respetuoso con diferentes opiniones
- ✅ Aceptar crítica constructiva
- ✅ Enfocarse en lo mejor para el proyecto
- ✅ Mostrar empatía hacia otros

### Comportamiento Inaceptable

- ❌ Lenguaje ofensivo o despectivo
- ❌ Ataques personales
- ❌ Acoso de cualquier tipo
- ❌ Publicar información privada de otros

## 🔄 Proceso de Review

1. **Revisión automática**: Checks de CI (si configurado)
2. **Revisión de maintainer**: Evaluación de código y funcionalidad
3. **Feedback**: Se pueden solicitar cambios
4. **Aprobación**: Cuando todo esté listo
5. **Merge**: Integración a la rama principal

**Tiempo de review**: Usualmente 2-5 días laborales

## 📅 Release Cycle

- **Releases menores**: Cada 2-4 semanas
- **Hotfixes**: Según necesidad
- **Major updates**: Según roadmap

## 🎓 Recursos para Aprender

Si eres nuevo contribuyendo a open source:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

## 💝 Agradecimientos

¡Gracias por contribuir a myAllSupport! Tu tiempo y esfuerzo ayudan a mejorar el proyecto para todos.

---

**¿Listo para contribuir?** 

1. Lee esta guía completa
2. Revisa los [Issues abiertos](https://github.com/christianasmussenb/myallsupport/issues)
3. Encuentra uno que te interese o crea uno nuevo
4. ¡Comienza a programar!

---

*Para preguntas específicas sobre contribuciones, crear un Issue con label `question` o contactar a los maintainers del proyecto.*
