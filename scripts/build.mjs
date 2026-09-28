// Let Windows close native build handles naturally instead of forcing process.exit.
process.env.NODE_ENV = 'production';
const { createBuilder } = await import('vite');
const { runPrerender } = await import('vinext/internal/build/run-prerender');
const builder = await createBuilder({ mode: 'production', logLevel: 'warn' });
await builder.buildApp();
const result = await runPrerender({ root: process.cwd() });
if (!result?.routes.some(route => route.route === '/' && route.status === 'rendered')) {
  throw new Error('The landing page was not exported.');
}
console.log('Static landing exported successfully to dist/client.');
