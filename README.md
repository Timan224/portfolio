# Portfolio Website

A creative, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring a sleek dark hexagon pattern background.

## Features

- Responsive design that works on all devices
- Smooth animations with Framer Motion
- Project showcase with interactive cards
- Skills section with animated progress bars
- Contact form with validation
- Modern dark UI with hexagon pattern background
- Accent color highlights and glow effects

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Add hexagon background image
   - Download a dark hexagon pattern image
   - Save it as `hexagon-bg.jpg` in the `public/images/` directory

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/components` - React components
- `/src/app` - Next.js App Router pages
- `/src/styles` - Global styles and Tailwind CSS config
- `/public/images` - Background images and assets

## Customization

You can customize the theme by modifying:
- `tailwind.config.js` - Contains theme colors and extensions
- `src/styles/globals.css` - Contains global styles and background settings

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings

Alternatively, you can deploy directly from the CLI:

```bash
npm install -g vercel
vercel
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## License

This project is licensed under the MIT License. 