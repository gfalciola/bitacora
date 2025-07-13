# Bitácora - Web de la Banda

Una web simple y elegante para la banda Bitácora con un diseño moderno y responsive.

## Características

- ✨ Diseño moderno con gradientes y animaciones
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 🎨 Efectos visuales atractivos
- 🔗 CTA directo al Linktree de la banda
- ⚡ Carga rápida y optimizada

## Cómo personalizar

### 1. Agregar el video de YouTube

Reemplaza el placeholder en `index.html` con tu video de YouTube:

```html
<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=TU_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

**Para obtener el ID de tu video:**
1. Ve a tu video en YouTube
2. El ID está en la URL: `https://www.youtube.com/watch?v=**TU_VIDEO_ID**`
3. Reemplaza `TU_VIDEO_ID` con el ID real

**Parámetros del video:**
- `autoplay=1` - Reproduce automáticamente
- `mute=1` - Sin sonido (necesario para autoplay)
- `loop=1` - Se repite continuamente
- `controls=0` - Sin controles de YouTube
- `showinfo=0` - Sin información del video
- `rel=0` - Sin videos relacionados
- `modestbranding=1` - Sin logo de YouTube

### 2. Cambiar colores

Modifica los gradientes en `styles.css`:

```css
/* Colores principales */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
```

### 3. Actualizar texto

Edita el contenido en `index.html`:

```html
<h1 class="band-name">BITÁCORA</h1>
<p class="band-description">Tu descripción aquí</p>
```

### 4. Cambiar el enlace del CTA

El botón ya está configurado para ir a: `https://linktr.ee/bitacora.rock`

## Cómo usar

1. Abre `index.html` en tu navegador
2. Para subir a internet, puedes usar servicios como:
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting

## Estructura de archivos

```
bitacora/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript interactivo
└── README.md       # Este archivo
```

## Tecnologías utilizadas

- HTML5
- CSS3 (con animaciones y gradientes)
- JavaScript vanilla
- Google Fonts (Inter)

## Personalización avanzada

### Agregar más secciones

Puedes agregar más contenido después del div `.hero`:

```html
<section class="nueva-seccion">
    <h2>Título</h2>
    <p>Contenido...</p>
</section>
```

### Cambiar fuentes

Modifica la importación en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Y actualiza en `styles.css`:

```css
body {
    font-family: 'TuFuente', sans-serif;
}
```

¡Listo! Tu web está lista para mostrar al mundo. 🎸 