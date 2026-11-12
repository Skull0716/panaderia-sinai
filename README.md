# Panadería Sinaí · Horno Tradicional Oaxaqueño

Sitio oficial del obrador — diseño cinematográfico, editorial, oscuro y de
alta gama, con la pintura metamórfica *“El Pan de Muerto”* (1991) de
Octavio Ocampo como ancla visual y conceptual de la marca.

## Stack

- **Next.js 15** (App Router, Server + Client Components)
- **Tailwind CSS** con tokens de color extraídos de la pintura
- **Motion** (`motion/react`, v12) con resortes físicos
- **lucide-react** · **next/font/google** (`Cinzel` + `Instrument Sans`)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx        Fuentes + <html> + grano de película
  page.tsx          Ensamble maestro + metadatos OpenGraph SEO
  globals.css       Tokens de color, utilidades (.shell, .eyebrow, .vignette…)
components/
  Nav.tsx           Barra fija con menú móvil
  Hero.tsx          Pintura con paralaje + botón magnético
  Manifesto.tsx     25 años · “El tiempo como ingrediente”
  PanesGrid.tsx     Catálogo interactivo con preview elástico
  OrderSection.tsx  Selector de encargo → WhatsApp (951 190 0287)
  Footer.tsx
  MagneticButton.tsx  Botón que sigue el cursor (física spring)
  Reveal.tsx        Revelado editorial al hacer scroll
lib/
  data.ts           Catálogo, contacto y URL de la obra
```

## Notas

- **Modelo de negocio:** 100% bajo pedido. El selector genera un mensaje
  listo para `https://wa.me/529511900287`.
- **Imagen de la obra:** se enlaza desde `a.1stdibscdn.com`. Para producción
  se recomienda descargarla y alojarla localmente (respeta los derechos de
  autor de Octavio Ocampo / la galería) y actualizar `PAINTING_URL` en
  `lib/data.ts`.
- El dominio de ejemplo es `panaderia-sinai.mx` (ajústalo en
  `app/layout.tsx` y `app/page.tsx`).
