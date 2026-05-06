# ASTU GYM 💪

A modern, premium gym website built for **ASTU GYM** — a fitness facility located near Adama Science and Technology University campus. Designed to attract members, showcase facilities, and provide a seamless experience on any device.

🔗 **Live Demo:** [astugym.vercel.app](https://astugym.vercel.app)

---

## 🖼️ Preview

> A dark-themed, high-impact landing page featuring smooth scroll navigation, animated sections, real-time opening hours, and a fully responsive layout.

---

## ⚡ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Scroll & entrance animations |
| **React Icons** | Icon library (Font Awesome) |

---

## 📁 Project Structure

```
astu-gym/
├── public/
│   ├── favicon.png          # Custom ASTU GYM favicon
│   └── logo.png             # Brand logo (dark-theme optimized)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed navbar with scroll-spy & mobile menu
│   │   ├── Hero.tsx          # Full-screen hero with CTA buttons
│   │   ├── Facilities.tsx    # Equipment & Programs grid (2 categories)
│   │   ├── Gallery.tsx       # Horizontal scroll image showcase
│   │   ├── Pricing.tsx       # 3-tier membership plans
│   │   ├── Cta.tsx           # Call-to-action with background image
│   │   ├── OpeningHours.tsx  # Real-time open/closed status badge
│   │   ├── Contact.tsx       # Contact form, WhatsApp, phone & map
│   │   └── Footer.tsx        # Brand footer with quick links & socials
│   ├── pages/
│   │   └── Home.tsx          # Main page assembling all sections
│   ├── App.tsx               # Root app component
│   ├── App.css               # Global smooth scroll
│   ├── index.css             # Tailwind directives & scrollbar-hide utility
│   └── main.tsx              # Entry point
├── index.html                # HTML template with favicon & fonts
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🧩 Sections & Features

### 1. Navbar
- Fixed at top with transparent → blurred background on scroll
- **Scroll-spy**: Active link highlights based on current section in view
- Active state: red text + red underline
- Mobile hamburger menu with smooth toggle (open/close icon swap)
- Smooth scroll navigation to all sections

### 2. Hero
- Full-screen background image with dark overlay
- Animated heading with red accent text ("Stay Consistent")
- Two CTA buttons: **Join Now** → scrolls to Contact, **View Pricing** → scrolls to Pricing

### 3. Facilities & Programs
- Split into two categories: **Equipment** and **Programs**
- 3 cards per category in a responsive grid
- Items: Modern Machines, Strength Zone, Cardio Area, Aerobics & Zumba, Group Classes, Guided Workouts
- Icons from `react-icons/fa`, hover animations

### 4. Gallery
- Horizontal scroll showcase with 6 gym images
- Scroll-snap for smooth swiping
- Hover effect: zoom + brightness increase
- Hidden scrollbar for a clean look
- Preview disclaimer note for the gym owner

### 5. Pricing
- 3 membership plans: Daily Pass, Student Plan (Popular), Standard Plan
- Popular plan highlighted with red border & badge
- Feature checklist per plan
- All "Join Now" buttons scroll to Contact section

### 6. Call-to-Action (CTA)
- Background gym image with dark overlay + blur
- Red ambient glow effect
- Bold typography with "Your Body?" in red
- Dual buttons: Join Now & Contact Us

### 7. Opening Hours
- **Real-time status**: 🟢 Open Now / 🔴 Closed (auto-updates every minute)
- Glowing status badge with pulse animation
- Clean schedule list (Mon–Fri, Saturday, Sunday)
- Centered highlight card design

### 8. Contact
- Two-column layout: Contact info + Google Map
- Functional links:
  - 📞 Phone: `tel:+251911234567`
  - 💬 WhatsApp: `wa.me/251911234567` (opens in new tab)
  - ✉️ Email: `mailto:info@astugym.com`
- Contact form (Name, Email, Message)
- Embedded Google Map with grayscale → color hover effect

### 9. Footer
- Brand logo + tagline
- Quick links with smooth scroll navigation
- Social media icons (Facebook, Instagram, Twitter)
- Dynamic copyright year

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Primary Accent** | `red-500` / `red-600` (#ef4444) |
| **Background** | `black` (#000000) |
| **Card Background** | `zinc-900` |
| **Card Border** | `zinc-800` |
| **Text Primary** | `white` |
| **Text Secondary** | `gray-300` / `gray-400` |
| **Text Muted** | `zinc-600` |
| **Success** | `green-400` / `green-600` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Teshome-Worku/astu-gym.git
cd astu-gym

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 Responsive Design

- **Mobile**: Stacked layouts, hamburger menu, touch-friendly tap targets
- **Tablet**: 2-column grids, balanced spacing
- **Desktop**: Full 3-column grids, spacious layout, hover interactions

---

## 🔮 Future Improvements

- [ ] Connect contact form to a backend service (EmailJS / Formspree)
- [ ] Replace placeholder images with actual gym photos
- [ ] Add testimonials / reviews section
- [ ] Add member login portal
- [ ] SEO meta tags optimization
- [ ] Performance audit & image optimization

---

## 📄 License

This project is built as a portfolio piece and client pitch for ASTU GYM.

---

**Built with ❤️ for ASTU GYM**
