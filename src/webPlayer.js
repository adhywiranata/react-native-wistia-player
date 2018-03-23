export default videoId => `
  <!DOCTYPE html>
  <html style="height: 100%; width: 100%;">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    </head>
    <body>
      <script
        src="https://fast.wistia.com/embed/medias/${videoId}.jsonp"
        async
      ></script>
      <script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        async
      ></script>
      <div
        class="wistia_responsive_padding"
        style="padding:177.92% 0 0 0;position:relative;"
      >
        <div
          class="wistia_responsive_wrapper"
          style="height:100%;left:0;position:absolute;top:0;width:100%;"
        >
          <div
            class="wistia_embed wistia_async_3r2k7bdc2d seo=false videoFoam=true"
            style="height:100%;width:100%">
            &nbsp;
          </div>
        </div>
      </div>
    </body>
  </html>
`;
