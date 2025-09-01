# PixelHomePage

A small **Next.js + TypeScript** project with a playful pixel-style landing page:

- `/` shows a centered pixel GIF.  
  Click the **laptop** area to enter the site.  
  (Press **`D`** to toggle a visible hotspot for alignment/debugging.)
- `/home` is a themed page with your uploaded image and the text:  
  **“Sienna is queen!!”**

Tech stack: Next.js 15, React 18, Pages Router, styled-jsx.

---

## 1. Prerequisites

- **Node.js** ≥ 18.x (LTS recommended)
- **npm** ≥ 9.x (or yarn/pnpm as you prefer)

Check versions:

```bash
node -v
npm -v
```

---

## 2. Quick Start

### Clone & Install

```bash
git clone https://github.com/<your-username>/PixelHomePage.git
cd PixelHomePage
npm install
```

### Run in Development

```bash
npm run dev
# open http://localhost:3000
```

- The landing page shows the **pixel-girl.gif**.
- Click the **laptop hotspot** to jump to `/home`.
- Press **`D`** to toggle hotspot debugging.

### Production Build

```bash
npm run build
npm start
# open http://localhost:3000
```

---

## 3. Project Structure

```
PixelHomePage/
├─ public/
│  ├─ pixel-girl.gif   # Landing GIF
│  └─ sienna.png       # Home page image
├─ pages/
│  ├─ _app.tsx         # Imports global styles
│  ├─ index.tsx        # Landing page with GIF + hotspot
│  └─ home.tsx         # Cute home page with image + text
├─ styles/
│  └─ globals.css
├─ package.json
├─ tsconfig.json
├─ next.config.js
└─ README.md
```

This project uses the **Pages Router**. If you prefer the App Router, remove `pages/` and migrate to `app/`.

---

## 4. Assets

Put your assets in the `public/` folder:

- `public/pixel-girl.gif` — required landing GIF (path: `/pixel-girl.gif`)
- `public/sienna.png` — image used on the home page (can be swapped, update the import path in `pages/home.tsx` if renamed)

Verify assets in your browser:

```
http://localhost:3000/pixel-girl.gif
http://localhost:3000/sienna.png
```

---

## 5. Customization

### 5.1 Adjusting the laptop hotspot

In `pages/index.tsx` adjust the `.hotspot` percentages:

```tsx
.hotspot {
  position: absolute;
  left: 52.5%;  /* move left/right */
  top: 59%;     /* move up/down */
  width: 14.5%; /* hotspot width */
  height: 12.5%;/* hotspot height */
}
```

- Use **`D`** to show the hotspot outline.
- Adjust in 0.5%–1% increments for accuracy.

### 5.2 Home page styling

- Colors, fonts, and animations are defined in `pages/home.tsx`.
- Replace `sienna.png` with any other image if desired.
- Add Tailwind/Framer Motion if you want more advanced styling.

---

## 6. Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## 7. Troubleshooting

- **404 for `/pixel-girl.gif`**  
  Ensure the file is exactly at `public/pixel-girl.gif` (case-sensitive). Restart the dev server.

- **Module not found: `@/styles/globals.css`**  
  If alias is not configured, use relative import:

  ```tsx
  import "../styles/globals.css";
  ```

  Or add path alias in `tsconfig.json`:

  ```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
  ```

- **Error: App Router and Pages Router both match path /**  
  Remove either `app/` or `pages/` — don’t use both for the root route.

- **GIF doesn’t animate**  
  This project uses `<Image unoptimized />` so GIFs remain animated.  
  If you see a static image, clear cache or use a plain `<img>` tag.

---
