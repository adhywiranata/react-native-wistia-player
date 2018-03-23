export default videoId => `
  <!DOCTYPE html>
  <html style="height: 100%; width: 100%; padding: 0; margin:0;">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <style>
        html, body {
          overflow-x: hidden;
          overflow-y: hidden;
          padding: 0; margin: 0;
        }
        body {
          position: relative;
          padding: 0; margin: 0;
          background-color: black;
        }
      </style>
    </head>
    <body>
      <div style="background: transparent; width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 995"></div>
      
      <script src="https://fast.wistia.com/embed/medias/${videoId}.jsonp" async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <div class="wistia_responsive_padding" style="padding:177.92% 0 0 0;position:relative;">
        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
          <div class="wistia_embed wistia_async_3r2k7bdc2d seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
        </div>
      </div>
      <script>

      window._wq = window._wq || [];
      _wq.push({ id: "${videoId}", onReady: function(video) {
        document.addEventListener("message", function(data) {
          let command = data.data;
          let speed = 1;
          if(command.includes('speed')) {
            speed = Number(command.split(':')[1]) || 1;
            command = 'speed';
          }

          switch(command) {
            case 'play': video.play(); break;
            case 'pause': video.pause(); break;
            case 'speed': video.playbackRate(speed); break;
          }
        });
      }});
      </script>
    </body>
  </html>
`;
