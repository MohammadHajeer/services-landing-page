# Landing Page Implementation

A high-fidelity, fully responsive landing page built from a Figma design specification. This project emphasizes pixel-perfect UI implementation, responsive layouts, smooth animations, and reusable component architecture.

## Preview

### Desktop

<details>
  <summary>Desktop Design Preview</summary>
  <br />
  <img src="./public/desktop-preview.png" alt="Desktop Preview" />
</details>

### Mobile

<details>
  <summary>Mobile Design Preview</summary>
  <br />
  <img src="./public/mobile-preview.png" alt="Mobile Preview" />
</details>

### Mobile Menu Demo

<details>
  <summary>Mobile Menu Demo</summary>
  <br />
  <img src="./public/mobile-menu-demo.gif" alt="Mobile Menu Demo" />
</details>

### Reviews Carousel Demo

<details>
  <summary>Reviews Carousel Demo</summary>
  <br />
  <img src="./public/carousel-demo.gif" alt="Carousel Demo" />
</details>

### FAQ Accordion Demo

<details>
  <summary>FAQ Accordion Demo</summary>
  <br />
  <img src="./public/accordion-demo.gif" alt="Accordion Demo" />
</details>

## Design Reference

This project was developed from a Figma design, with a focus on accurately translating the provided design into a responsive and production-ready application.

**Figma Design:** https://www.figma.com/community/file/1257965372422620398

## Tech Stack

* **Framework:** React
* **Styling:** Tailwind CSS
* **Animations:** Motion
* **Package Manager:** pnpm

---

## Technical Highlights

* **Figma-to-Code Precision:** Translated complex layouts, custom clipping paths, and spacing systems into clean, responsive Tailwind CSS implementations.
* **Dynamic FAQ Accordion:** Built a smooth expand/collapse FAQ experience using Framer Motion's `AnimatePresence` for seamless mounting and unmounting animations.
* **Bidirectional Review Carousel:** Engineered a testimonial slider that tracks navigation direction, ensuring correct entrance and exit animations for both next and previous interactions.
* **Fractional Star Ratings:** Developed a reusable star rating component using SVG linear gradients to accurately render decimal ratings such as 3.4 or 4.8.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:MohammadHajeer/services-landing-page.git
cd services-landing-page
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start the Development Server

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

### 4. Build for Production

```bash
pnpm build
```

### 5. Preview the Production Build

```bash
pnpm preview
```

The preview server will be available at:

```text
http://localhost:4173
```
