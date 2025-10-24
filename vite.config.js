// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Assuming you meant to import Tailwind this way

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        // 💡 যদি tailwindcss/vite প্লাগইন ব্যবহার করেন, তবে এটি ঠিক আছে।
        // যদি শুধু Tailwind CSS ব্যবহার করেন, তাহলে এটি বাদ দিতে পারেন।
        tailwindcss() 
    ],
    // ✅ FIX 1: The 'base' must match your GitHub repository name exactly, including the leading and trailing slash.
    base: '/Programming-Hero-Assignment-07/', 
});