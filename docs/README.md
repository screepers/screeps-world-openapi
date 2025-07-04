# Docs Templates

This template is used for the github pages deployment.

## Files

- `index.html` - Swagger UI template used for GitHub Pages deployment
- `swagger-init.js` - JavaScript initialization script for Swagger UI

## Local Development

To test the documentation locally, you can use the provided npm script:

```bash
npm run serve:docs
```

This will:
1. Build the OpenAPI specification
2. Set up a temporary directory with all required files
3. Start a local HTTP server at http://localhost:8080
4. Automatically open the documentation in your browser

## Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the main branch via the `.github/workflows/deploy-docs.yml` workflow. 