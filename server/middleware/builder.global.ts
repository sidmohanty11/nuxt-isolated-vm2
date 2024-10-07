export default defineEventHandler(async (event) => {
  if (process.server) {
    const { initializeNodeRuntime } = await import(
      "@builder.io/sdk-vue/node/init"
    );
    initializeNodeRuntime();
  }
});
