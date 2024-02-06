/*
  MIT License

  Copyright (c) 2024 Rajveer-Mahida

  This Script is provided for educational purposes only. It is not intended
  for production use. The authors and contributors of this software are not
  responsible for any misuse or damages caused by the use of this script.
*/

addEventListener('fetch', (event) => {
    event.respondWith(
      handleRequest(event.request).catch(
        (err) => new Response(err.message, { status: 500 })
      )
    );
  });
  
  async function handleRequest(request) {
    try {
      const { pathname } = new URL(request.url);
  
      let idType, identifier;
  
      if (pathname.startsWith('/live/')) {
        idType = 'live';
        identifier = pathname.split('/')[2]?.split('.')[0];
      } else if (pathname.startsWith('/@')) {
        idType = 'handle';
        identifier = pathname.split('.')[0].substring(2);
      } else if (pathname.startsWith('/channel/')) {
        idType = 'channel';
        identifier = pathname.split('/')[2]?.split('.')[0];
      } else if (pathname.startsWith('/c/')) {
        idType = 'customName';
        identifier = pathname.split('/')[2]?.split('.')[0];
      } else if (pathname.startsWith('/user/')) {
        idType = 'user';
        identifier = pathname.split('/')[2]?.split('.')[0];
      } else {
        throw new Error(`Path not found: ${pathname}`);
      }
  
      if (identifier) {
        const url = `https://www.youtube.com/${getYouTubePath(idType, identifier)}/live`;
  
        const response = await fetch(url, {
          cf: {
            cacheTtl: 10800,
            cacheEverything: true,
          },
        });
  
        if (response.ok) {
          const text = await response.text();
          const stream = text.match(/(?<="hlsManifestUrl":").*\.m3u8/g);
  
          if (stream) {
            return Response.redirect(stream[0], 302);
          } else {
            throw new Error(`HLS stream URL not found in the response`);
          }
        } else {
          throw new Error(`YouTube URL (${url}) failed with status: ${response.status}`);
        }
      } else {
        throw new Error(`${capitalize(idType)} ID not found in the URL path`);
      }
    } catch (err) {
      return new Response(err.message, { status: 500 });
    }
  }
  
  function getYouTubePath(idType, identifier) {
    switch (idType) {
      case 'live':
        return `live/${identifier}`;
      case 'handle':
        return `@${identifier}`;
      case 'channel':
        return `channel/${identifier}`;
      case 'customName':
        return `c/${identifier}`;
      case 'user':
        return `user/${identifier}`;
      default:
        return '';
    }
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  