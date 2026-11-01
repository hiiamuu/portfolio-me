// PDFs are bundled as assets (see next.config.ts); importing one gives its URL.
declare module "*.pdf" {
  const url: string;
  export default url;
}
