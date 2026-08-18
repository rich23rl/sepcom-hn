# SEPCOM — Website

Landing page de **SEPCOM** (Servicios Profesionales de Construcciones Múltiples S de R.L.), empresa hondureña de electrificación, construcción y comercialización de materiales, con sede en Tegucigalpa.

Es un sitio estático de una sola página (one-page), en español, sin dependencias de build ni framework.

## Tecnologías

- HTML5 semántico (`index.html`)
- CSS3 puro con variables personalizadas (`styles.css`)
- JavaScript vanilla, sin librerías (`script.js`)
- [Font Awesome 6.5.1](https://fontawesome.com/) vía CDN (iconografía)
- Imágenes locales en `images/` + dos imágenes de Unsplash vía CDN
- Despliegue en **Vercel** (proyecto `sepcom-landing`)

## Estructura del proyecto

```
sepcom/
├── index.html      # Toda la estructura del sitio (444 líneas)
├── styles.css      # Estilos, animaciones y responsive (1131 líneas)
├── script.js       # Interactividad (173 líneas)
├── images/
│   ├── SVG_normal.svg       # Logo completo (navbar)
│   ├── SVG_iso_normal.svg   # Isotipo (favicon / apple-touch-icon)
│   └── *.jpeg               # Fotografías de proyectos
└── .gitignore
```

## Secciones del sitio

| Sección | ID | Contenido |
|---|---|---|
| Navegación | `navbar` | Barra fija con logo, menú y menú hamburguesa en móvil |
| Hero | `#inicio` | Título, CTAs y contadores animados (15 años, 200 proyectos, 100 clientes) |
| Nosotros | `#nosotros` | Descripción, Misión, Visión y 4 valores |
| Servicios | `#servicios` | Electrificación · Construcción General · Asesoría y Supervisión |
| Proyectos | `#proyectos` | 9 proyectos realizados (Kimpton Gran Roatán, Arihini, Eductrade, DPI Kennedy, Mall Cascadas, Hotel Clarion, Valle de Ángeles, etc.) |
| Equipo | — | Texto descriptivo del equipo |
| Contacto | `#contacto` | Dirección, teléfono, correos y CTA de WhatsApp |
| Footer | — | Resumen, enlaces rápidos y datos de contacto |

Además hay un **botón flotante de WhatsApp** fijo en pantalla, con mensaje pre-cargado hacia el `+504 3162-0885`.

## Funcionalidad de `script.js`

- **Navbar dinámica**: agrega la clase `scrolled` al pasar 100px de scroll.
- **Menú móvil**: toggle del hamburguesa; se cierra al pulsar cualquier enlace.
- **Animaciones al hacer scroll**: `IntersectionObserver` activa los elementos con clase `animate-on-scroll`.
- **Contadores animados**: las estadísticas del hero suben de 0 a su `data-target` en ~2s y terminan con `+`; cada una se dispara una sola vez, cuando entra en pantalla.
- **Smooth scroll**: navegación interna con offset de 70px para compensar la navbar fija.
- **Enlace activo**: resalta el enlace del menú según la sección visible.
- **Parallax** en el hero y clase `loaded` en el `body` al terminar de cargar.

## Diseño

Paleta definida como variables CSS en `:root` (`styles.css`):

| Variable | Valor | Uso |
|---|---|---|
| `--primary-color` | `#1a4d8f` | Azul corporativo |
| `--secondary-color` | `#2563eb` | Azul secundario / degradados |
| `--accent-color` | `#f59e0b` | Ámbar de acento |
| `--dark-color` | `#1f2937` | Fondos oscuros |
| `--light-color` | `#f3f4f6` | Fondos claros |

Responsive con breakpoints en **968px** (tablet / menú hamburguesa) y **640px** (móvil).

## Ejecución local

No requiere instalación ni build. Basta con abrir `index.html` en el navegador, o levantar un servidor estático para evitar restricciones de rutas:

```bash
# Con Python
python -m http.server 8000

# Con Node
npx serve .
```

Luego visita `http://localhost:8000`.

## Despliegue

El sitio se despliega en Vercel como proyecto estático (no hay paso de build). Con la CLI:

```bash
vercel        # deploy de preview
vercel --prod # deploy a producción
```

La carpeta `.vercel/` está en `.gitignore` y no debe versionarse.

## Cómo editar el contenido

- **Datos de contacto**: aparecen en la sección `#contacto` y en el footer de `index.html`. El número de WhatsApp está en dos enlaces `https://wa.me/50431620885?...` (CTA y botón flotante).
- **Agregar un proyecto**: copiar un bloque `.project-card` dentro de `.projects-grid`, cambiar la imagen, el `<h4>` del overlay (nombre del cliente/lugar) y el `<h3>` de `.project-info` (tipo de trabajo). Se puede ajustar el encuadre con `style="object-position: center 30%"`.
- **Estadísticas del hero**: cambiar el atributo `data-target` de cada `.stat-number`.
- **Colores**: modificar las variables en `:root` de `styles.css`.

## Pendientes conocidos

- Las fotos de proyectos son JPEG sin optimizar (hasta ~250 KB) con nombres tipo `WhatsApp Image ...`; renombrarlas y comprimirlas mejoraría la carga.
- El hero y la imagen de "Sobre Nosotros" dependen de Unsplash; sustituirlas por fotos propias eliminaría la dependencia externa.
- Faltan metaetiquetas SEO (`description`, Open Graph) y atributo `rel="noopener"` en los enlaces con `target="_blank"`.

---

© 2026 SEPCOM. Todos los derechos reservados, Honduras.
