const md = require('markdown-it')();
const striptags = require('./strip-tags');

module.exports = function(tokens, idx) {
  var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
  if (tokens[idx].nesting === 1) {
    var description = m[1]
    var content = tokens[idx + 1].content
    var html = striptags.strip(content, ['script', 'style'])
    var descriptionHTML = md.render(description)

    return `
  <demo-block>
    <div slot="source">
      ${html}
    </div>
    ${descriptionHTML}
    <div v-highlight slot="highlight">
      `
  } else {
    return `
    </div>
  </demo-block>\n`
  }
}
