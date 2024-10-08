export default defineEventHandler(async (event) => {
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-vue/node/init"
  );
  initializeNodeRuntime();
});
