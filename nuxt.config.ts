// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  nitro: {
    preset: "vercel_edge",
    rollupConfig: {
      external: ["isolated-vm"],
    },
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
