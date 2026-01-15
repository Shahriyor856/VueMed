export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  i18n: {
    locales: [
      { code: "uz_cyrillic", file: "cril.json", name: "Ўз" },
      { code: "uz_latin", file: "uz.json", name: "O'z" },
      { code: "ru", file: "ru.json", name: "Ру" },
      { code: "en", file: "en.json", name: "En" },
    ],
    defaultLocale: "uz_cyrillic",
    strategy: "no_prefix",
    langDir: "./locales",
  },

  css: ["@/assets/main/main.css"],
  ssr: false,
});
