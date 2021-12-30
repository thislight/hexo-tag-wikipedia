
function buildArgsHash(args) {
  let argsHash = {};
  args.forEach(arg => {
    const params = arg.split(':');
    argsHash[params[0]] = params[1];
  });

  return argsHash;
}

function generateWikipediaTagHtml(args, content){
  const argsHash = buildArgsHash(args);
  const title = argsHash['title'];

  const lang = argsHash['lang'] !== undefined ? argsHash['lang'] : 'en';
  const baseUrl = `https://${lang}.wikipedia.org`;

  const url = `${baseUrl}/api/rest_v1/page/summary/${title}?redirect=false`;

  const tagId = Math.round(Math.random() * 100000);
  const embeddedScript = `
    window.addEventListener('load', function() {
      var element = document.getElementById('${tagId}');
      var req = new XMLHttpRequest();
      req.addEventListener("load", function() {
        var result = this.response;
        const extract = result.extract;
        element.prepend(extract);
      });
      req.addEventListener("error", function() {
        element.prepend('Failed to fetch wikipedia data for "${title}".');
      });
      req.open('GET', '${url}');
      req.responseType = 'json';
      req.setRequestHeader('accept', 'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.4.2"');
      req.send();
    });
  `;
  let contentText = `<script>${embeddedScript}</script>`;
  if (argsHash['wikiButton'] === 'true') {
    contentText += `<p><a href="${baseUrl}/wiki/${title}">Wikipedia:${title}</a></p>`;
  }

  return `<blockquote id='${tagId}'>${contentText}</blockquote>`;
}

hexo.extend.tag.register('wikipedia', generateWikipediaTagHtml);
