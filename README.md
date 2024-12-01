# AI Translate

A modern AI-powered translation web application built with Next.js, featuring a clean and intuitive UI inspired by Apple and Google design principles.

## Features

- Clean and modern UI/UX design
- Real-time AI-powered translation
- Support for multiple languages
- Responsive design for all devices
- Powered by Cloudflare's AI model (@CF/META/LLAMA-3.1-70B-INSTRUCT)

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: React Context
- **API Integration**: Cloudflare AI API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and add your Cloudflare API key:
   ```
   CLOUDFLARE_API_KEY=your_api_key
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

The project follows a clean architecture pattern with the following structure:

```
src/
  ├── app/             # Next.js app router
  ├── components/      # Reusable UI components
  ├── lib/            # Utility functions and API clients
  ├── styles/         # Global styles
  └── types/          # TypeScript type definitions
```

## License

MIT
