import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // กำหนดสีตามโหมดต่าง ๆ ได้ตรงนี้
        lightBackground: '#f3f4f6', // ตัวอย่างสีพื้นหลังโหมดสว่าง
        darkBackground: '#1f2937', // ตัวอย่างสีพื้นหลังโหมดมืด
        lightText: '#000000', // ตัวอย่างสีตัวอักษรโหมดสว่าง
        darkText: '#ffffff', // ตัวอย่างสีตัวอักษรโหมดมืด
      },
    },
  },
  plugins: [],
} satisfies Config;
