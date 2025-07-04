// Swagger UI initialization script
window.onload = function () {
  const container = document.getElementById('swagger-ui')
  console.log(
    'Attempting to load OpenAPI spec from:',
    window.location.origin + window.location.pathname + 'openapi.yaml'
  )

  fetch('./openapi.yaml')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      console.log('Successfully loaded OpenAPI spec')
      return response.text()
    })
    .then(_yamlText => {
      const ui = SwaggerUIBundle({
        url: './openapi.yaml',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl],
        layout: 'StandaloneLayout',
        validatorUrl: null,
        displayOperationId: false,
        defaultModelsExpandDepth: 1,
        defaultModelExpandDepth: 1,
        defaultModelRendering: 'example',
        displayRequestDuration: true,
        docExpansion: 'list',
        filter: false,
        maxDisplayedTags: -1,
        showExtensions: true,
        showCommonExtensions: true,
        tryItOutEnabled: true,
        // Explicitly prevent fallback to petstore
        urls: null,
        defaultURL: null,
        onComplete: function () {
          console.log('Swagger UI onComplete')

          // Add custom styling
          addCustomStyles()

          // Debug: Log what spec is loaded
          try {
            const state = ui.getState()
            console.log('Swagger UI state:', state)
          } catch (e) {
            console.error('Error getting state:', e)
          }
        },
        onFailure: function (error) {
          console.error('Swagger UI onFailure:', error)
          container.innerHTML =
            '<div style="color: red; padding: 20px;">Failed to load OpenAPI specification. Check console for details.</div>'
        }
      })
    })
    .catch(error => {
      console.error('Failed to fetch OpenAPI spec:', error)
      container.innerHTML = `<div style="color: red; padding: 20px;">
        <h3>Error loading OpenAPI specification</h3>
        <p>Could not load openapi.yaml file. Error: ${error.message}</p>
        <p>Check the browser console for more details.</p>
        <p>Expected file location: ${
          window.location.origin + window.location.pathname + 'openapi.yaml'
        }</p>
      </div>`
    })
}

// Function to add custom styles
function addCustomStyles() {
  const style = document.createElement('style')
  style.textContent = `
    .swagger-ui .scheme-container {
      background: #f7f7f7;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 20px;
    }
    .swagger-ui .info .title {
      color: #3b4151;
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  `
  document.head.appendChild(style)
}
