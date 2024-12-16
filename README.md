# QuestMates 🎮

Find your perfect Player 2! QuestMates is a modern web platform that connects gamers based on their gaming preferences, schedules, and play styles. 

## Features ✨

- **Interactive Landing Page** with Three.js particle effects and smooth animations
- **Smart Matching System** based on gaming preferences and schedules
- **Real-time Chat** for matched players
- **Modern UI** with dark mode and gradient themes
- **Responsive Design** that works on all devices

## Tech Stack 🛠️

- **Frontend**: Next.js 14.1.0
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion
- **3D Effects**: Three.js
- **Authentication**: Clerk
- **Backend/Database**: Convex
- **Package Manager**: pnpm

## Getting Started 🚀

1. **Clone the repository**

   ```bash
   git clone https://github.com/spragginsdesigns/quest_mates.git
   cd quest_mates
   ```
2. **Install dependencies**

   ```bash
   pnpm install
   ```
3. **Set up environment variables**

   ```bash
   # Create a .env.local file and add your keys
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CONVEX_DEPLOYMENT=your_convex_deployment_url
   ```
4. **Run the development server**

   ```bash
   pnpm dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000)** to see the app

## Project Structure 📁

```
quest_mates/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── landing/     # Landing page components
│   │   └── ui/          # Reusable UI components
│   └── lib/             # Utility functions
├── public/              # Static assets
└── docs/               # Project documentation
```

## Development Guidelines 📝

- Use TypeScript for type safety
- Follow the "use client" directive for client-side components
- Maintain consistent code formatting
- Write meaningful commit messages
- Test thoroughly before pushing

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Clerk](https://clerk.dev/) - Authentication and user management
- [Convex](https://www.convex.dev/) - Backend as a service

---

Built with ❤️ for gamers by gamers | Austin Spraggins & Queekos
