# Zodiac Sign Prediction App

A beautiful, interactive web application that predicts your zodiac sign based on your birth date. Built with Next.js, React, and Tailwind CSS.

## Features

✨ **Interactive Zodiac Prediction** - Enter your birth date to discover your zodiac sign
🎨 **Beautiful UI** - Modern, responsive design with smooth animations
📱 **Mobile Friendly** - Works seamlessly on all devices
🌈 **Zodiac Details** - Get information about your zodiac sign including dates, symbol, and element
🎯 **Real-time Validation** - Instant feedback on date input

## Zodiac Signs Included

- ♈ Aries (March 21 - April 19)
- ♉ Taurus (April 20 - May 20)
- ♊ Gemini (May 21 - June 20)
- ♋ Cancer (June 21 - July 22)
- ♌ Leo (July 23 - August 22)
- ♍ Virgo (August 23 - September 22)
- ♎ Libra (September 23 - October 22)
- ♏ Scorpio (October 23 - November 21)
- ♐ Sagittarius (November 22 - December 21)
- ♑ Capricorn (December 22 - January 19)
- ♒ Aquarius (January 20 - February 18)
- ♓ Pisces (February 19 - March 20)

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Runtime:** Node.js (Vercel)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Marcus-Mok-GH/zodiac-app.git
cd zodiac-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select the `zodiac-app` repository
5. Click "Deploy"

Your app will be live in minutes!

**Live Demo:** https://zodiac-app-five.vercel.app

### Deploy to Other Platforms

This app can be deployed to any platform that supports Node.js:

- **Netlify:** Drag and drop the `.next` build folder
- **AWS Amplify:** Connect your GitHub repo directly
- **Heroku:** Use the Procfile included in the project
- **DigitalOcean:** Deploy using App Platform

## Project Structure

```
zodiac-app/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main zodiac prediction page
│   └── globals.css        # Global styles and Tailwind
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── vercel.json            # Vercel deployment config
```

## How It Works

1. User enters their birth date using the date picker
2. The app calculates which zodiac sign corresponds to that date
3. Zodiac sign details are displayed with:
   - Zodiac symbol
   - Sign name and dates
   - Element (Fire, Earth, Air, Water)
   - Key traits
4. Smooth animations enhance the user experience

## Zodiac Sign Properties

Each zodiac sign has associated properties:

- **Symbol:** Visual representation (♈, ♉, etc.)
- **Dates:** Date range for the sign
- **Element:** Fire, Earth, Air, or Water
- **Traits:** Key characteristics of people born under that sign

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- ⚡ Fast page load times with Next.js optimization
- 📦 Optimized bundle size (~91KB First Load JS)
- 🎯 SEO-friendly with Next.js metadata
- 🚀 Static generation for instant page loads

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Author

Built with ❤️ by Marcus-Mok-GH

---

**Questions?** Check out the [Next.js documentation](https://nextjs.org/docs) or the [Tailwind CSS documentation](https://tailwindcss.com/docs)
