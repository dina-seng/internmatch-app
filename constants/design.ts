export const COLORS = {
  background: {
    primary: "#020617",   // slate-950
    secondary: "#0f172a", // slate-900
    card: "#1e293b",      // slate-800
    elevated: "#334155",  // slate-700
  },
  text: {
    primary: "#f1f5f9",   // slate-100
    secondary: "#94a3b8", // slate-400
    muted: "#64748b",     // slate-500
  },
  accent: {
    blue: "#3b82f6",      // blue-500
    indigo: "#6366f1",    // indigo-500
    green: "#22c55e",     // green-500
    amber: "#f59e0b",     // amber-500
  },
  border: "#1e293b",      // slate-800
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  full: 9999,
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;