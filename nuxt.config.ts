// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  nitro: {
    preset: "vercel",
  },
  modules: [
    [
      "@builder.io/sdk-vue/nuxt",
      {
        includeCompiledCss: true,
        initializeNodeRuntime: true,
      },
    ],
  ],
});
