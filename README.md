A simple site containing my resume.  Based on the excellent Pillar
theme from [3rdwavemdia](https://themes.3rdwavemedia.com/), but
tweaked to be minified and a couple of stylistic changes.

## Building

For development:

```bash
npm run dev
```

This starts a local dev server with hot-deploy at port 5173.

For production:

```bash
npm run build
npm run preview 
```

This builds the app in `dist/`. The "preview" command serves the
prod build locally for testing.
