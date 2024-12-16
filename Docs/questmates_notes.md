# QuestMates - Where Gamers Find Their Player 2

## Project Vision

QuestMates is more than just another gaming app – it's a platform designed to forge meaningful connections through shared gaming experiences. While many gamers connect over titles like FFVII or Mass Effect, we're diving deeper to create authentic matches based on comprehensive gaming preferences and play styles.

## Core Concept

- Gaming-focused social connection platform
- Match users based on detailed gaming preferences
- Foster meaningful connections through shared gaming experiences
- Emphasis on user experience with immersive, gamer-aesthetic UI

## Technical Setup (as of March 19, 2024)

### Initial Setup Completed

```powershell
# Initialized Next.js project with pnpm
pnpm create next-app@latest .

# Project Configuration Choices
✅ TypeScript
✅ ESLint
✅ Tailwind CSS
✅ src/ directory
✅ App Router
✅ Custom import alias (@/*)

# Added key dependencies
pnpm add convex @clerk/clerk-react
pnpm add -D @types/node @types/react @types/react-dom
pnpm add three @types/three
pnpm add framer-motion lucide-react @radix-ui/react-icons
```

### Current Tech Stack

- Frontend: Next.js 14.1.0 (downgraded from 15.1.0 for stability)
- Runtime: Deno v2.1.4
- Package Manager: pnpm
- Styling: Tailwind CSS, Shadcn UI
- Authentication: Clerk
- Backend/Database: Convex
- Type Safety: TypeScript
- 3D Effects: Three.js
- Animations: Framer Motion (v10.18.0)
- Icons: Lucide React, Radix Icons

## Development Progress

### Landing Page (In Progress)

- ✅ Implemented responsive hero section
- ✅ Created interactive particle system with Three.js
- ✅ Added dark mode with gradient theme
- ✅ Implemented responsive design
- ✅ Added animated feature cards section
- ✅ Implemented scroll-based animations
- ✅ Fixed client-side rendering issues with framer-motion
- ✅ Optimized React/Next.js version compatibility
- 🔄 Next: Add authentication flow
- 🔄 Next: Add game matching preview section

### Components Created

- `ParticleContainer`: Interactive background with Three.js
  - Added client-side rendering with "use client" directive
  - Implemented mouse interaction and particle animation
  - Optimized performance with proper cleanup
- `FeatureCard`: Reusable card component with hover effects
  - Added gradient hover animations
  - Implemented smooth transitions
- `FeaturesSection`: Grid layout of feature cards with animations
  - Added scroll-based reveal animations
  - Implemented staggered children animations
  - Fixed client-side rendering issues

### Recent Fixes & Optimizations

- ✅ Added "use client" directives to components using client-side features
- ✅ Downgraded Next.js from 15.1.0 to 14.1.0 for better stability
- ✅ Updated React to v18.2.0 for better compatibility
- ✅ Optimized framer-motion version to 10.18.0
- ✅ Fixed undefined component issues in server-side rendering
- ✅ Improved component export/import structure

## Planned Features

### User Experience

- Immersive dark gradient UI with particle effects
- Interactive game card swiping interface
- Real-time match notifications
- Gaming profile customization
- Chat system for matched users

### Matching System

- Multi-factor compatibility algorithm
  - Shared game preferences
  - Gaming schedule alignment
  - Play style compatibility
  - Platform preferences
  - Gaming experience level

### Social Features

- Group matching for multiplayer games
- Gaming session scheduling
- Achievement sharing
- Game recommendations
- Community events

## Next Steps

### Phase 1: Authentication & Profile Creation 🔐

#### 1. Authentication Setup (Next Task)

- [ ] Set up Clerk authentication
  - [ ] Implement sign-up/sign-in pages
  - [ ] Add social auth (Discord, Google, etc.)
  - [ ] Create protected routes
  - [ ] Add auth middleware
  - [ ] Design auth pages with our theme

#### 2. Profile Creation Flow 🎮

- [ ] Multi-step profile wizard
  1. Basic Info
     - Username/Gamertag
     - Profile picture/avatar
     - Timezone/Location
     - Age/Birthday
  2. Gaming Preferences
     - Favorite genres
     - Preferred platforms
     - Competitive vs. Casual
     - Favorite games (searchable list)
  3. Play Style Quiz
     - Gaming schedule
     - Communication preferences
     - Team role preferences
     - Gaming goals
  4. Social Preferences
     - Voice chat comfort level
     - Language preferences
     - Team size preferences
     - Streaming/Content creation interests

#### 3. Database Schema (Convex)

```typescript
// User Profile
interface UserProfile {
	id: string;
	clerkId: string;
	username: string;
	avatarUrl: string;
	timezone: string;
	birthday: Date;
	createdAt: Date;
	updatedAt: Date;
}

// Gaming Preferences
interface GamingPreferences {
	userId: string;
	favoriteGenres: string[];
	platforms: string[];
	playStyle: "Casual" | "Competitive" | "Both";
	favoriteGames: string[];
	availability: {
		weekday: TimeRange[];
		weekend: TimeRange[];
	};
}

// Social Preferences
interface SocialPreferences {
	userId: string;
	voiceChatPreference: "Always" | "Sometimes" | "Never";
	languages: string[];
	teamSize: "Solo" | "Small" | "Large";
	contentCreator: boolean;
}
```

### Implementation Order

1. **Authentication (Week 1)**

   - Set up Clerk
   - Create auth pages
   - Implement protected routes

2. **Profile Creation UI (Week 2)**

   - Design profile wizard components
   - Implement step navigation
   - Add form validation
   - Create progress indicator

3. **Database Integration (Week 3)**

   - Set up Convex
   - Implement data models
   - Create API endpoints
   - Add data validation

4. **Profile Features (Week 4)**
   - Add avatar upload/customization
   - Implement game search/selection
   - Add schedule selector
   - Create profile preview

### UI Components Needed

- [ ] `AuthLayout` - Layout for auth pages
- [ ] `ProfileWizard` - Multi-step form container
- [ ] `GameSearch` - Searchable game selector
- [ ] `ScheduleSelector` - Visual schedule picker
- [ ] `AvatarUpload` - Profile picture upload
- [ ] `ProfilePreview` - Profile card preview
- [ ] `GenreSelector` - Gaming genre picker
- [ ] `PlatformSelector` - Gaming platform picker

### API Endpoints Needed

```typescript
// Convex Functions
- createUserProfile(data: UserProfileData)
- updateUserProfile(id: string, data: Partial<UserProfileData>)
- getUserProfile(id: string)
- updateGamingPreferences(userId: string, data: GamingPreferencesData)
- updateSocialPreferences(userId: string, data: SocialPreferencesData)
```

## Current Development Focus

Moving from landing page to authentication and profile creation, focusing on creating an engaging and intuitive user onboarding experience.

## Development Guidelines

- Prioritize performance and mobile responsiveness
- Maintain clean, well-documented code
- Follow TypeScript best practices
- Regular Git commits with meaningful messages
- Testing for critical user flows
- Always add "use client" directive for components using client-side features
- Ensure proper version compatibility between packages

## Notes and Ideas

- Consider implementing a "gaming personality" quiz for better matches
- Explore integration with gaming platforms' APIs
- Plan for scalability and user growth
- Consider adding voice chat capabilities for matched users
- Keep track of package version compatibility
- Document all client-side components and their dependencies

## Project Location

`C:\Users\Owner\Documents\Github_Repositories\quest_mates`

Remember to update this documentation as the project evolves. Let's build something amazing! 🎮✨
