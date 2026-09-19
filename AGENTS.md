# AGENTS.md

# MASTER PROMPT — INVITACIÓN XV AÑOS PREMIUM

## 1. ROL

Actúa como un Senior Frontend Engineer + Creative Developer + UI/UX Designer especializado en:

- React
- TypeScript
- Vite / Next.js según el proyecto existente
- Animaciones web
- CSS avanzado
- Motion design
- Experiencias digitales premium
- Diseño editorial
- Invitaciones digitales de lujo
- Responsive design
- Performance
- Accesibilidad

Tu objetivo es transformar el proyecto actual en una experiencia web de invitación de XV años de nivel premium.

NO quiero una landing page convencional.

Quiero que la experiencia se sienta como:

> una invitación física de lujo que cobra vida en la pantalla.

La primera impresión debe ser cinematográfica, elegante, romántica, femenina, mágica y sofisticada.

---

# 2. REGLA PRINCIPAL

NO intentes implementar todo de una sola vez.

El proyecto debe desarrollarse por fases.

Debes trabajar ÚNICAMENTE en la fase que te indique.

Después de terminar cada fase:

1. Ejecuta el proyecto.
2. Verifica que compile.
3. Revisa errores de TypeScript.
4. Revisa errores de consola.
5. Revisa responsive.
6. Revisa que las animaciones funcionen.
7. Revisa que no existan imports rotos.
8. Revisa que no existan assets inexistentes.
9. Corrige los errores encontrados.
10. Detente.

NO avances automáticamente a la siguiente fase.

Cuando termines una fase responde indicando:

- qué implementaste
- archivos creados/modificados
- problemas encontrados
- problemas solucionados
- cómo probarlo

Y espera mi siguiente instrucción.

---

# 3. OBJETIVO VISUAL

La invitación debe tener una dirección artística basada en:

- princesa
- cuento de hadas
- castillo
- carruaje
- flores
- rosas
- mariposas
- hadas
- cristales
- papelería de lujo
- detalles dorados
- papel artesanal
- pergamino
- polvo mágico
- estrellas
- partículas
- iluminación cálida
- romanticismo
- elegancia editorial

La estética debe sentirse:

- premium
- delicada
- elegante
- femenina
- romántica
- mágica
- sofisticada
- cinematográfica
- artesanal
- lujosa

NO debe parecer:

- dashboard
- ecommerce
- página corporativa
- plantilla genérica
- sitio tecnológico
- landing page moderna minimalista
- interfaz llena de cards

---

# 4. PALETA VISUAL

Utiliza principalmente:

- pastel pink
- blush
- dusty pink
- rose pink
- rose champagne
- ivory
- cream
- beige
- champagne
- soft gold
- warm white

El dorado debe utilizarse como elemento decorativo y elegante.

NO abuses del dorado.

Evita colores excesivamente saturados.

La composición debe sentirse suave y cálida.

---

# 5. TEXTURAS Y FONDOS

Los fondos deben tener profundidad.

Utilizar combinaciones de:

- papel texturizado
- watercolor
- papel artesanal
- gradientes suaves
- flores desenfocadas
- ramas
- pétalos
- partículas doradas
- polvo mágico
- estrellas pequeñas
- bokeh
- iluminación cálida
- sombras suaves

NO utilices un único fondo plano para toda la página.

Cada sección debe tener pequeñas variaciones manteniendo continuidad visual.

---

# 6. REGLA DE ASSETS

Los elementos visuales importantes deben ser independientes.

NO crear una única imagen gigante que contenga toda la escena.

Quiero poder mover individualmente:

- castillo
- carruaje
- rosas
- flores
- ramas
- mariposas
- hadas
- cristales
- ornamentos
- partículas
- estrellas
- sello de cera
- sobre
- pergamino
- marco dorado
- silueta de princesa

Siempre que sea posible utilizar:

- SVG
- PNG transparente
- WebP
- AVIF

Preferir assets con fondo transparente cuando tengan que integrarse sobre otros elementos.

Evitar:

- imágenes pixeladas
- imágenes con watermark
- imágenes de mala calidad
- assets visualmente incompatibles
- estilos artísticos mezclados

Todos los assets deben mantener una dirección artística consistente.

---

# 7. BÚSQUEDA / GENERACIÓN DE ASSETS

Cuando falte un asset:

1. Primero determina exactamente qué elemento visual se necesita.
2. Busca una alternativa visual adecuada.
3. Si no existe una opción suficientemente buena, genera o crea una alternativa.
4. No sustituyas un elemento importante por una imagen genérica de baja calidad.

Los assets deben estar organizados.

Usar una estructura similar a:

public/
assets/
envelope/
castle/
carriage/
flowers/
butterflies/
fairies/
ornaments/
textures/
backgrounds/
particles/
frames/
music/

No colocar todos los assets directamente en una única carpeta.

---

# 8. EXPERIENCIA INICIAL

La pantalla inicial debe parecer una invitación física de lujo.

El usuario debe encontrarse con:

- fondo elegante
- papel rosado
- ornamentos dorados
- flores
- cristales
- iluminación suave
- partículas
- polvo mágico
- un gran sobre rosado

El sobre es el protagonista.

Debe sentirse como un objeto físico.

---

# 9. SOBRE

El sobre NO debe ser una única imagen.

Debe construirse mediante capas independientes.

Crear componentes similares a:

Envelope
EnvelopeBack
EnvelopeBody
EnvelopeFlap
EnvelopeFront
WaxSeal
Letter
EnvelopeDecorations

El sobre debe poder animarse individualmente.

---

# 10. ESTRUCTURA DEL SOBRE

Debe existir una composición similar a:

                    decoración
                        ↓

             ┌─────────────────┐
             │                 │
             │     CASTILLO    │
             │                 │
             │                 │
             │      SOBRE      │
             │                 │
             │   SELLO CERA    │
             │                 │
             └─────────────────┘

El flap debe estar encima del cuerpo.

La carta debe estar físicamente dentro del sobre.

El sello debe estar encima del flap.

---

# 11. ANIMACIÓN IDLE DEL SOBRE

Antes de abrirse, el sobre debe tener una animación muy sutil.

Debe parecer que está vivo.

Animaciones posibles:

- movimiento vertical de 2–4px
- escala extremadamente pequeña
- variación de sombra
- pequeño glow
- partículas ocasionales
- pequeños destellos

La animación debe ser lenta.

Duración aproximada:

6–10 segundos.

No utilizar movimientos bruscos.

---

# 12. APERTURA DEL SOBRE

ESTA ES UNA DE LAS PARTES MÁS IMPORTANTES DE TODA LA EXPERIENCIA.

La apertura debe sentirse física.

NO hacer simplemente:

transform: scaleY()

NO hacer simplemente:

opacity: 0

El sobre debe parecer que realmente se abre.

---

# 13. SECUENCIA DE APERTURA

La secuencia debe ser:

ESTADO 1
Sobre cerrado.

↓

ESTADO 2
El usuario hace click/tap.

↓

ESTADO 3
El sobre responde ligeramente.

- pequeño scale
- glow
- sombra
- partículas

↓

ESTADO 4
El sello de cera recibe iluminación.

El sello debe:

- aumentar ligeramente de escala
- recibir un highlight
- tener brillo
- separarse visualmente del sobre

↓

ESTADO 5
El sello desaparece/se desprende.

Debe parecer que deja de sujetar el sobre.

↓

ESTADO 6
El flap comienza a abrirse.

Debe utilizar:

perspective

transform-origin: top center

transformaciones 3D.

Debe parecer un flap físico.

↓

ESTADO 7
La carta aparece dentro.

Inicialmente:

opacity: 0
scale: 0.96

↓

ESTADO 8
La carta comienza a salir.

Debe subir físicamente desde dentro del sobre.

↓

ESTADO 9
La carta continúa subiendo.

Debe aumentar ligeramente de escala.

↓

ESTADO 10
La carta se acerca al usuario.

Debe utilizar:

scale
translateY
opacity
blur/glow

↓

ESTADO 11
La carta ocupa gran parte de la pantalla.

↓

ESTADO 12
Se produce una transición cinematográfica.

↓

ESTADO 13
Aparece la invitación completa.

---

# 14. APERTURA CINEMATOGRÁFICA

La transición debe sentirse como:

sobre físico
→ carta
→ carta acercándose
→ transición
→ invitación

No debe existir un cambio instantáneo.

Utilizar:

- fade
- scale
- blur
- glow
- partículas
- profundidad
- movimiento

La transición debe ser elegante.

---

# 15. ESTADO DE APERTURA

Crear un estado similar a:

hasOpenedInvitation

La animación de apertura debe ejecutarse una sola vez durante la sesión.

No repetirla accidentalmente al hacer scroll.

Opcionalmente puede existir un botón de replay al final.

---

# 16. CONTENIDO DEL SOBRE

Dentro del sobre debe aparecer:

"Mis XV Años"

"CAMILA"

"01 · 08 · 2026"

El nombre debe tener una tipografía elegante.

El diseño debe parecer una invitación impresa.

---

# 17. IDIOMAS

Debe existir soporte:

- Español
- English

Agregar selector:

ES
EN

No duplicar componentes.

No crear:

HeroSpanish
HeroEnglish

Usar un sistema de traducciones.

Ejemplo conceptual:

translations.es
translations.en

Los textos deben cambiar dinámicamente.

---

# 18. MÚSICA

Crear:

MusicPlayer

Debe permitir:

- play
- pause
- volumen
- progreso
- indicador visual
- waveform animada

La música NO debe comenzar automáticamente sin interacción del usuario.

Debe comenzar después de una interacción válida.

El reproductor debe ser visualmente consistente con la invitación.

No utilizar un player HTML genérico sin estilizar.

---

# 19. HERO / INTRODUCCIÓN

Después de abrir el sobre debe aparecer una sección de introducción.

Debe sentirse como una invitación editorial.

Puede contener:

- nombre
- frase
- fecha
- flores
- ornamentos
- partículas
- mariposas
- fondo texturizado

Evitar apariencia de website convencional.

---

# 20. SECCIÓN PRINCESA

Crear una sección protagonista.

Debe contener:

- marco ovalado dorado
- silueta de princesa
- flores
- rosas
- cristales
- partículas
- estrellas
- polvo mágico

La princesa debe tener apariencia:

- elegante
- dorada
- champagne
- delicada

El marco debe sentirse físico.

Debe existir:

- sombra
- profundidad
- brillo
- pequeñas animaciones

---

# 21. MARCO DORADO

Crear componente reutilizable:

RoyalFrame

Debe permitir:

- imagen
- contenido
- decoración
- sombra
- glow

Debe poder reutilizarse en otras secciones.

---

# 22. PERGAMINO

Crear una sección tipo pergamino.

Debe utilizar:

- ivory
- cream
- champagne
- beige
- textura de papel
- bordes suaves
- ornamentos dorados

Debe parecer un pergamino real.

Agregar rollos superiores e inferiores.

No crear simplemente un rectángulo con border-radius.

---

# 23. HADAS

En la sección del pergamino deben aparecer pequeñas hadas.

Al menos:

- hada verde/turquesa
- hada rosada

Deben ser elementos independientes.

No deben quedar pegadas al contenido.

Deben tener pequeñas animaciones.

---

# 24. FLORES

Utilizar:

- rosas
- flores pequeñas
- ramas
- pétalos

Deben estar distribuidas de forma editorial.

Evitar llenar toda la pantalla.

---

# 25. MARIPOSAS

Las mariposas deben ser independientes.

Crear componente:

Butterfly

No hacer únicamente:

translateX(100vw)

Las trayectorias deben ser orgánicas.

Combinar:

translateX
translateY
rotate
scale

Usar diferentes:

duration
delay
amplitude
direction

Cada mariposa debe tener una trayectoria diferente.

Ejemplo conceptual:

Mariposa 1:
sube → gira → baja → vuelve a subir.

Mariposa 2:
se mueve diagonalmente.

Mariposa 3:
hace pequeños movimientos laterales.

Mariposa 4:
aparece y desaparece suavemente.

La animación debe sentirse natural.

---

# 26. PARTÍCULAS

Crear:

GoldenParticles

Debe generar pequeñas partículas:

- doradas
- champagne
- blancas cálidas

Las partículas deben tener:

- opacity
- scale
- movimiento vertical
- movimiento horizontal
- diferentes delays
- diferentes velocidades

No generar miles de elementos que afecten performance.

---

# 27. SPARKLES

Crear:

Sparkles

Pequeños destellos que aparecen de forma ocasional.

Deben utilizar:

- scale
- opacity
- rotate
- blur/glow

No todos deben aparecer simultáneamente.

---

# 28. PÉTALOS

Crear:

Petals

Los pétalos pueden caer lentamente.

No hacer una lluvia excesiva.

Debe sentirse elegante.

---

# 29. PARALLAX

Crear diferentes capas:

background
texture
watercolor
flowers
butterflies
ornaments
content

Cada capa debe moverse ligeramente a diferente velocidad.

El parallax debe ser sutil.

No marear al usuario.

---

# 30. FECHA

Crear:

DateSection

Debe mostrar algo similar a:

AUGUST

SAT · 01 · 2026

La tipografía debe ser elegante.

Utilizar:

- serif
- gold
- líneas finas
- espacios amplios

No utilizar tarjetas tipo dashboard.

---

# 31. COUNTDOWN

Crear:

Countdown

Mostrar:

days
hours
minutes
seconds

Pero NO debe parecer:

- dashboard
- panel administrativo
- contador tecnológico

Debe integrarse con la invitación.

Utilizar:

- tipografía elegante
- ornamentos
- líneas
- flores
- detalles dorados

---

# 32. PADRES

Crear:

ParentsSection

Debe mostrar los nombres de los padres.

Diseño editorial.

No utilizar cards genéricas.

---

# 33. PADRINOS

Crear:

GodparentsSection

Debe mantener el mismo lenguaje visual.

---

# 34. FRASES

Crear intercaladamente secciones de frases.

Ejemplo:

"Un sueño que comienza,
una nueva etapa que llega,
y un momento que quiero compartir contigo."

Las frases deben aparecer como elementos editoriales.

Utilizar animaciones de entrada.

---

# 35. GALERÍA

Crear:

GallerySection

Las fotos deben sentirse como fotografías físicas colocadas sobre una mesa/invitación.

Utilizar:

- fotografías verticales
- marcos dorados
- sombras
- pequeñas rotaciones
- overlapping
- flores
- ornamentos

No utilizar una grid estándar de ecommerce.

Evitar:

display:grid

con todas las fotos iguales.

Las fotografías deben tener composición artística.

---

# 36. ANIMACIÓN DE GALERÍA

Las fotografías pueden entrar con:

- fade
- slide
- zoom
- parallax
- slight rotate

Cada imagen puede tener pequeñas diferencias.

Debe utilizar:

invitationData.photos

No hardcodear imágenes dentro del componente.

---

# 37. CEREMONIA

Crear:

EventSection

Debe mostrar:

- ceremonia
- hora
- lugar
- dirección

Debe mantener el lenguaje visual de invitación.

---

# 38. RECEPCIÓN

Mostrar:

- recepción
- hora
- venue
- dirección

---

# 39. DRESS CODE

Crear:

DressCodeSection

Debe mostrar el código de vestimenta de manera elegante.

No usar cards corporativas.

---

# 40. REGALOS

Crear:

GiftSection

Debe mostrar la información de regalos de manera delicada.

---

# 41. CONFIRMACIÓN

Crear:

ConfirmationSection

Debe existir botón para confirmar asistencia por WhatsApp.

El botón debe utilizar:

whatsappNumber

whatsappMessage

No hardcodear el número dentro del componente.

Generar correctamente el enlace de WhatsApp.

---

# 42. UBICACIÓN

Crear:

LocationSection

Debe utilizar:

mapsUrl

Agregar botón para abrir Google Maps.

La ubicación debe sentirse integrada con la estética.

---

# 43. CIERRE

Crear:

FinalSection

Debe mostrar:

"Gracias por ser parte de este momento tan especial."

"CAMILA"

"MIS XV AÑOS"

Agregar:

- pequeño castillo
- rosas
- mariposas
- estrellas
- partículas
- ornamentos dorados

Debe sentirse como el final de una invitación física.

---

# 44. NAVEGACIÓN

NO utilizar un navbar tradicional.

La invitación debe sentirse como una experiencia narrativa.

La navegación principal será mediante scroll.

Opcionalmente utilizar:

- indicador de progreso
- botón de música
- back to top

Pero deben ser elementos discretos.

---

# 45. TRANSICIONES ENTRE SECCIONES

Las secciones NO deben sentirse aisladas.

Debe existir continuidad visual.

Por ejemplo:

una mariposa puede salir de una sección y aparecer en otra.

Las partículas pueden continuar.

Las flores pueden cambiar progresivamente.

Los fondos deben hacer transición suave.

---

# 46. SCROLL REVEAL

Implementar animaciones al entrar en viewport.

Utilizar combinaciones de:

opacity
translateY
translateX
scale
blur

Ejemplo:

opacity: 0
transform: translateY(30px)
filter: blur(5px)

↓

opacity: 1
transform: translateY(0)
filter: blur(0)

No hacer que todo aparezca simultáneamente.

---

# 47. BOTONES

Los botones deben utilizar:

- ivory
- champagne
- blush
- gold
- sombras suaves
- border fino
- serif

Hover:

- pequeño aumento
- glow
- elevación

No utilizar botones genéricos azules.

---

# 48. TIPOGRAFÍA

Máximo 3 familias tipográficas.

Utilizar:

SCRIPT:

- Great Vibes
- Allura
- Parisienne

SERIF:

- Cormorant Garamond
- Playfair Display
- Cinzel

SANS:

una familia limpia para información secundaria.

La jerarquía debe ser:

Nombre:
script

Títulos:
serif

Información:
serif/sans

---

# 49. COMPOSICIÓN

La composición debe utilizar:

- espacio negativo
- profundidad
- capas
- sombras
- overlapping
- elementos flotantes
- iluminación

No colocar todos los elementos centrados de forma rígida.

Debe parecer una composición editorial.

---

# 50. PROFUNDIDAD

Utilizar:

z-index
shadows
blur
scale
perspective
parallax
opacity

para crear profundidad.

Los elementos deben sentirse ubicados en diferentes planos.

---

# 51. RESPONSIVE

Mobile first.

Optimizar específicamente para:

375px
390px
414px

Después:

tablet
desktop

En móvil:

- no debe existir overflow horizontal
- no cortar elementos
- no deformar imágenes
- botones suficientemente grandes
- textos legibles
- animaciones controladas
- partículas reducidas si es necesario

En desktop:

la invitación debe permanecer centrada.

NO convertirla en una landing gigante horizontal.

Debe conservar la sensación de invitación.

---

# 52. PERFORMANCE

Prioridades:

- imágenes optimizadas
- WebP
- AVIF
- SVG
- lazy loading
- responsive images
- preload solamente de recursos críticos
- evitar renders innecesarios
- evitar timers innecesarios
- evitar listeners excesivos
- evitar partículas excesivas

No sacrificar la experiencia visual innecesariamente.

---

# 53. ACCESIBILIDAD

Implementar:

- alt text
- botones accesibles
- aria-label cuando corresponda
- contraste suficiente
- navegación por teclado
- focus states
- reduced motion

Respetar:

prefers-reduced-motion

Cuando esté activo:

- reducir partículas
- reducir parallax
- reducir movimientos
- reducir animaciones

La experiencia debe seguir siendo funcional.

---

# 54. DATA

Crear una estructura central:

invitationData

Debe contener como mínimo:

name
age
date
month
year
ceremony
reception
venue
address
mapsUrl
parents
godparents
dressCode
whatsappNumber
whatsappMessage
music
photos
language
theme

Los componentes deben consumir estos datos.

No duplicar información.

---

# 55. TEMPLATE REUTILIZABLE

La invitación debe ser reutilizable.

Debe ser posible cambiar:

- nombre
- edad
- fecha
- mes
- año
- fotografías
- colores
- tema
- textos
- música
- ubicación
- padres
- padrinos
- WhatsApp

sin reconstruir los componentes.

---

# 56. ARQUITECTURA

La arquitectura debe ser limpia.

Componentes principales:

Invitation
OpeningEnvelope
MusicPlayer
HeroSection
PrincessSection
ParchmentSection
DateSection
Countdown
ParentsSection
GodparentsSection
GallerySection
EventSection
DressCodeSection
GiftSection
ConfirmationSection
LocationSection
FinalSection

Componentes decorativos:

GoldenOrnament
Butterfly
FlowerDecoration
GoldenParticles
Sparkles
Petals
FairyCharacter
WaxSeal
RoyalFrame
Castle
Carriage

---

# 57. COMPONENTES

Cada componente debe tener una responsabilidad clara.

Evitar componentes gigantes.

Evitar:

Invitation.tsx

con miles de líneas.

Dividir correctamente.

---

# 58. ESTADO

Centralizar estados importantes.

Ejemplo:

hasOpenedInvitation
isMusicPlaying
language

No crear estados duplicados innecesarios.

---

# 59. CSS / ANIMACIONES

Preferir soluciones mantenibles.

Crear variables:

--color-blush
--color-pink
--color-ivory
--color-champagne
--color-gold

etc.

Las animaciones deben ser reutilizables.

---

# 60. NO HACER

NO:

- crear una landing genérica
- usar Bootstrap visualmente sin personalización
- crear dashboards
- utilizar cards para todo
- usar un único background
- meter toda la escena en una sola imagen
- hacer animaciones lineales simples
- hacer todas las animaciones simultáneas
- utilizar colores saturados
- utilizar botones genéricos
- utilizar navbar tradicional
- duplicar componentes para idiomas
- hardcodear información
- hardcodear WhatsApp
- hardcodear fotos
- ignorar mobile
- ignorar accessibility
- ignorar performance

---

# 61. REGLA DE DISEÑO

Siempre pregunta mentalmente:

"¿Esto parece una invitación física de lujo cobrando vida?"

Si la respuesta es NO:

rediseñar el elemento.

---

# 62. PRIORIDADES

Prioridad 1:

Experiencia de apertura del sobre.

Prioridad 2:

Calidad visual.

Prioridad 3:

Assets.

Prioridad 4:

Animaciones.

Prioridad 5:

Composición.

Prioridad 6:

Tipografía.

Prioridad 7:

Mobile.

Prioridad 8:

Performance.

Prioridad 9:

Accessibility.

Prioridad 10:

Reutilización.

---

# 63. FASES DE IMPLEMENTACIÓN

## FASE 1 — ANÁLISIS DEL PROYECTO

Antes de modificar código:

1. Analiza estructura actual.
2. Identifica framework.
3. Identifica entry point.
4. Identifica sistema de estilos.
5. Identifica componentes existentes.
6. Identifica assets existentes.
7. Identifica dependencias.
8. Identifica qué puede reutilizarse.
9. Identifica qué debe refactorizarse.
10. Identifica riesgos técnicos.

No implementes todavía toda la invitación.

Entrega un plan técnico.

DETENTE.

---

# FASE 2 — FUNDACIÓN VISUAL

Implementar:

- variables de colores
- tipografías
- backgrounds
- textura
- layout principal
- sistema de spacing
- sistema de profundidad
- estructura base

Crear la fundación visual.

No implementar todavía toda la animación del sobre.

Verificar responsive.

DETENTE.

---

# FASE 3 — ASSETS

Preparar y organizar:

- castillo
- carruaje
- rosas
- flores
- ramas
- mariposas
- hadas
- cristales
- ornamentos
- partículas
- estrellas
- marco
- pergamino
- sello
- sobre

Crear estructura de assets.

Verificar que todos los imports funcionen.

DETENTE.

---

# FASE 4 — SOBRE

Implementar completamente:

Envelope
EnvelopeBack
EnvelopeBody
EnvelopeFlap
EnvelopeFront
WaxSeal
Letter
EnvelopeDecorations

Implementar:

- estado idle
- hover
- tap
- sello
- flap 3D
- carta
- salida de carta
- zoom
- transición

Esta fase debe recibir especial atención.

DETENTE.

---

# FASE 5 — APERTURA CINEMATOGRÁFICA

Perfeccionar:

closed envelope
→ click
→ seal
→ seal detach
→ flap
→ letter
→ letter rise
→ letter zoom
→ transition
→ invitation

Verificar:

mobile
desktop
touch
mouse

DETENTE.

---

# FASE 6 — HERO + INTRO

Implementar:

- hero
- nombre
- fecha
- frases
- decoración
- partículas
- mariposas
- música

DETENTE.

---

# FASE 7 — PRINCESA

Implementar:

- RoyalFrame
- princess
- flowers
- crystals
- particles
- sparkles
- parallax

DETENTE.

---

# FASE 8 — PERGAMINO

Implementar:

- parchment
- fairy
- flowers
- butterflies
- stars
- ornaments
- animations

DETENTE.

---

# FASE 9 — FECHA + COUNTDOWN

Implementar:

DateSection
Countdown

Integrar visualmente.

DETENTE.

---

# FASE 10 — PADRES + PADRINOS

Implementar:

ParentsSection
GodparentsSection

DETENTE.

---

# FASE 11 — GALERÍA

Implementar:

GallerySection

Con:

- fotos
- marcos
- sombras
- rotaciones
- overlapping
- parallax
- reveal

DETENTE.

---

# FASE 12 — EVENTOS

Implementar:

EventSection
DressCodeSection
GiftSection
LocationSection
ConfirmationSection

DETENTE.

---

# FASE 13 — CIERRE

Implementar:

FinalSection

Con:

- castillo
- rosas
- mariposas
- partículas
- estrellas
- mensaje final
- nombre

DETENTE.

---

# FASE 14 — ANIMACIONES GLOBALES

Implementar y perfeccionar:

- butterflies
- particles
- petals
- sparkles
- parallax
- scroll reveal
- transitions
- background transitions

Revisar que no haya demasiada animación.

DETENTE.

---

# FASE 15 — IDIOMAS

Implementar:

ES
EN

Sin duplicar componentes.

Verificar todos los textos.

DETENTE.

---

# FASE 16 — RESPONSIVE

Probar:

375px
390px
414px
768px
1024px
1280px
1440px

Corregir:

- overflow
- posiciones
- tipografía
- imágenes
- botones
- animaciones

DETENTE.

---

# FASE 17 — PERFORMANCE

Revisar:

- imágenes
- lazy loading
- fonts
- renders
- listeners
- particles
- animations
- bundle

Optimizar.

DETENTE.

---

# FASE 18 — ACCESSIBILITY

Revisar:

- keyboard
- focus
- aria
- alt
- contrast
- reduced motion

DETENTE.

---

# FASE 19 — REFACTOR

Revisar:

- componentes
- hooks
- data
- estilos
- duplicación
- naming
- imports
- tipos

No cambiar diseño innecesariamente.

DETENTE.

---

# FASE 20 — QA FINAL

Realizar revisión completa.

Verificar:

- apertura
- música
- scroll
- idiomas
- countdown
- galería
- WhatsApp
- Maps
- responsive
- consola
- TypeScript
- build
- performance
- accessibility

Corregir problemas.

DETENTE.

---

# 64. COMPORTAMIENTO DEL AGENTE

Cuando yo diga:

"FASE 1"

ejecuta únicamente FASE 1.

Cuando yo diga:

"FASE 2"

ejecuta únicamente FASE 2.

Cuando yo diga:

"FASE 3"

ejecuta únicamente FASE 3.

Y así sucesivamente.

Nunca avances automáticamente.

---

# 65. SI EXISTE CÓDIGO PREVIO

Antes de reemplazar código:

- analizarlo
- determinar si puede reutilizarse
- conservar funcionalidades válidas
- evitar romper APIs existentes
- evitar eliminar código útil sin razón

No reconstruir el proyecto desde cero si no es necesario.

---

# 66. CALIDAD DEL CÓDIGO

El código debe ser:

- limpio
- tipado
- mantenible
- reusable
- modular
- escalable

Evitar:

- any innecesarios
- duplicación
- magic numbers
- lógica mezclada con presentación
- componentes gigantes

---

# 67. RESULTADO FINAL

El resultado debe sentirse como una experiencia premium.

La persona debe:

1. Llegar a la invitación.
2. Ver un sobre físico.
3. Sentir curiosidad.
4. Hacer click.
5. Ver cómo se abre el sello.
6. Ver cómo se abre el flap.
7. Ver salir la carta.
8. Ver acercarse la carta.
9. Entrar cinematográficamente a la invitación.
10. Recorrer una experiencia de cuento de hadas.
11. Ver fotografías.
12. Conocer la fecha.
13. Conocer la ubicación.
14. Confirmar asistencia.
15. Llegar a un cierre memorable.

La experiencia completa debe sentirse:

"una invitación física de princesa convertida en una experiencia digital cinematográfica".

---

# 68. INSTRUCCIÓN FINAL

No sacrifiques la experiencia visual por implementar rápidamente.

Primero calidad.

Después cantidad.

Cada elemento debe tener intención visual.

Cada animación debe tener propósito.

Cada asset debe contribuir a la narrativa.

Cada sección debe sentirse parte de la misma invitación.

No quiero simplemente una página bonita.

Quiero una EXPERIENCIA DE INVITACIÓN PREMIUM.
