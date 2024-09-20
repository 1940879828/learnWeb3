const { screens, colors } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  prefix: "",
  theme: {
    screens: {
      ...screens,
      "3xl": "1714px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          100: "#f7f7f7",
          200: "#e8e8e8",
          400: "#c8c8c6",
          500: "#a8a8a8",
          525: "#9a9a9a",
          550: "#6e6e6e",
          600: "#6d6d6d",
          625: "#5E5E5E",
          800: "#444444",
          850: "#2e2e2e",
          880: "#222222",
          900: "#121212",
          "900_4c": "#1212124c",
          "100_1e": "#f7f7f71e",
          "100_0f": "#f7f7f70f",
          "100_4c": "#f7f7f74c",
          "500_01": "#9a9a9a",
          "900_02": "#121212",
          "900_01": "#232323",
        },
        white: {
          ...colors.white,
          A700_0f: "#ffffff0f",
          A700: "#ffffff",
          A700_1e: "#ffffff1e",
          A700_7f: "#ffffff7f",
          A700_0c: "#ffffff0c",
          AE9E: "#E9E9E9",
        },
        lime: {
          A400: "#c1ff0e",
          A400_19: "#c1ff0e19",
          A400_0c: "#c1ff0e0c",
          A400_99: "#c1ff0e99",
          A400_19_01: "#c1ff0e19",
          A400_33: "#c1ff0e33",
          A300: "#d6ff70",
          A200_01: "#cfff45",
          A200: "#ceff45",
        },
        black: { 900: "#000000", "900_33": "#00000033" },
        blue_gray: {
          50: "#edf0f3",
          100: "#d2d2d2",
          400: "#878787",
          900: "#2d2d2d",
          "100_99": "#cecece99",
          "100_b2": "#cececeb2",
          "100_4c": "#cecece4c",
        },
        red: { 600: "#e84142" },
        light_green: { 500: "#9db656", A700: "#4bde1b" },
        lime_A400_01: "#c0ff0e",
        neutral: {
          black: "#121212",
          gray0: "#222222",
          white100: "#F7F7F7"
        }
      },
      spacing: {
        header: "4rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #2aabee, #229ed9)",
        rainbow:
            "linear-gradient(90deg, #C1FF0E 0%, #FFAB50 50%, #FF4DE3 100%)",
        "app-background": 'url("/images/app_background.webp")',
      },
      fontFamily: {
        orbitron: "Orbitron",
        poppins: "Poppins",
        sfmono: '"SF Mono", ui-monospace',
        sfpro: '"SF Pro", ui-sans-serif',
        sfprodisplay: "SF Pro Display",
      },
      boxShadow: {
        xs: "0px 0px 1px 4px #c3ff0e19",
        sm: "0px 4px 20px 0px #12121228",
        "swap-border": "0px 0px 0px 4px rgba(195, 255, 14, 0.1)",
      },
      opacity: {
        6: "0.06",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
}
