# InternMatch Mobile App

Production-ready React Native + Expo mobile app for internship discovery.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Expo CLI: `npm install -g expo-cli`
- iOS/Android emulator or physical device

### Installation

```bash
# Install dependencies
npm install

# or with yarn
yarn install
```

### Running the App

```bash
# Start development server
npm start

# Or use expo directly
expo start

# Then choose:
# - Press 'i' for iOS simulator
# - Press 'a' for Android emulator
# - Scan QR code with Expo Go app (phones)
```

## 📁 Project Structure

```
internmatch-mobile/
├── app/
│   ├── (tabs)/                 # Tab navigation
│   │   ├── _layout.tsx        # Bottom tab setup
│   │   ├── index.tsx          # Home screen
│   │   ├── search.tsx         # Search screen
│   │   └── profile.tsx        # Profile screeN
|   | _layout.tsx
|   | modal.tsx
├── components/
│   |--FeaturedCard.tsx
│   └── FilterChip.tsx
│   └── InternshipCard.tsx       
│   └── SettingsRow.tsx
│   └── StatsBar.tsx      
├── constants/
│   ├── design.ts              # Color palette
├── hooks/
│   ├── useAuth.ts             # Authentication hook
│   └── index.ts               # Exports
├── assets/
│   └── fonts/                 # Custom fonts
├── app.json                   # Expo config
├── package.json
├── tsconfig.json
├── tailwind.config.js         # Tailwind config
└── babel.config.js            # Babel config
```

## 🎨 Features

### Navigation
- File-based routing with Expo Router
- Bottom tab navigation (Home, Search, Profile)
- Stack navigation for detail screens
- Proper nesting with (tabs) group

### Screens
- **Home**: List of all internship opportunities
- **Search**: Filterable search with debouncing
- **Profile**: User profile with logout
- **Project Detail**: Full internship details with apply button


### UI Components
- Reusable `Button` (3 variants)
- `Input` with icon support
- `Badge` component
- `ProjectCard` for listings
- `ScreenContent` wrapper

### State Management
- Zustand for global auth state
- Mock authentication system
- No external backend needed

### Styling
- NativeWind (Tailwind for React Native)
- Custom color theme (Blue + Slate)
- Responsive design
- Consistent spacing

## 🔧 Development

### Adding a New Screen
1. Create file in `app/(tabs)/` or `app/`
2. Use `ScreenContent` wrapper
3. Import components as needed
4. Routing happens automatically

### Adding a New Component
1. Create in `components/ui/` or `components/cards/`
2. Use TypeScript interfaces for props
3. Use Tailwind classes
4. Export from index.ts

### Modifying Colors
Edit `constants/Colors.ts` to change the app theme.

## 📱 Platforms

- ✅ iOS (via Xcode)
- ✅ Android (via Android Studio)
- ✅ Web (via Expo Web)
- ✅ Expo Go app (for testing)

## 🛠️ Tech Stack

- **Framework**: React Native + Expo
- **Language**: TypeScript
- **Routing**: Expo Router v2
- **State Management**: Zustand
- **Styling**: NativeWind (Tailwind CSS)
- **Icons**: Expo Vector Icons (Material Design)
- **Development**: Expo CLI

## 🚢 Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

## 📝 Environment Variables

Create `.env` file (optional):
```
EXPO_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Commit changes: `git commit -am 'feat: description'`
3. Push: `git push origin feature/name`
4. Open PR

## 📄 License

MIT

## 🆘 Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
expo start -c
npm install
```

### Fonts not loading
Ensure fonts are in `assets/fonts/` and referenced in `app.json`

### Navigation issues
Make sure all routes are in correct folders and file names match route patterns

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [React Native Docs](https://reactnative.dev/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Tailwind CSS](https://tailwindcss.com/)