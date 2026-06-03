# Landing Page Implementation

A high-fidelity, fully responsive landing page built directly from a Figma design specification. This project focuses on pixel-perfect UI execution, optimized layout transitions, and modular component architecture.

## Tech Stack

* **Framework:** React
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion

---

## Technical Highlights & Implementation Details

* **Figma-to-Code Precision:** Translated complex vector layouts, custom polygon clipping vectors, and design spacing systems directly into clean, responsive Tailwind code.
* **Dynamic FAQ Accordion:** Implemented a smooth expand/collapse FAQ section utilizing Framer Motion's AnimatePresence for clean DOM unmounting animations and layout height stabilization.
* **Bidirectional Review Carousel:** Engineered a testimonial slider that dynamically tracks interaction history, ensuring entrance and exit slide animations correspond accurately to Next and Previous navigation triggers.
* **Fractional Star Ratings:** Developed a reusable star rating utility utilizing SVG linear gradient masks to precisely render partial decimal values (e.g., 3.4 or 4.8 stars).
* **Advanced Asset Masking:** Utilized CSS mask-image linear gradients to achieve feathered alpha-channel edges on absolute-positioned background elements.

---

## Getting Started

### 1. Clone the Repository

Clone the project locally using the SSH URL:

```bash
git clone git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install Dependencies

Install all project dependencies using pnpm:

```bash
pnpm install
```

### 3. Start the Development Server

Run the local development environment:

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

### 4. Build for Production

Create an optimized production build:

```bash
pnpm build
```

### 5. Preview the Production Build

Start the production server locally:

```bash
pnpm preview
```
The application will be available at:

```text
http://localhost:4173
```