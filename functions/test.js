module.exports = (url)=>{
    return `<!-- HTML for static distribution bundle build -->
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Swagger UI</title>
        <link rel="stylesheet" type="text/css" href="/dist/common/swagger-ui.css" >
        <link rel="stylesheet" type="text/css" href="/dist/common/menu.css" >
        <link rel="icon" type="image/png" href="/dist/common/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/dist/common/favicon-16x16.png" sizes="16x16" />
        <style>
          html
          {
            box-sizing: border-box;
            overflow: -moz-scrollbars-vertical;
            overflow-y: scroll;
          }
    
          *,
          *:before,
          *:after
          {
            box-sizing: inherit;
          }
    
          body
          {
            margin:0;
            background: #fafafa;
          }
        </style>
      </head>
    
      <body>
        <div id="swagger-ui"></div>
      </div>
        <script src="/dist/common/swagger-ui-bundle.js" charset="UTF-8"> </script>
        <script src="/dist/common/swagger-ui-standalone-preset.js" charset="UTF-8"> </script>
        <script>
        window.onload = function() {
          // Begin Swagger UI call region
          const ui = SwaggerUIBundle({
            url: "${url}",
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIStandalonePreset
            ],
            plugins: [
              SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout"
          })
          // End Swagger UI call region
    
          window.ui = ui
        }
      </script>
       <script src="/dist/common/menu.js" charset="UTF-8"> </script>
      </body>
    </html>
    `;
}