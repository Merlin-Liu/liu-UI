// const f = require('fs')

exports.mid = function(source, md) {
  const styleReg = /<(style)(?:[^>]*)?>([\s\S]*?)(?:<\/\1>[^\"\']|<\/\1>$)/i
  const scriptReg = /<(script)(?:[^>]*)?>([\s\S]*?)(?:<\/\1>[^\"\']|<\/\1>$)/i

  const styleStr = styleReg.exec(source)
  const style = styleStr ? styleStr[0] : ''
  const scriptStr = scriptReg.exec(source)
  const script = scriptStr ? scriptStr[0] : ''
  const templateStr = source.replace(styleReg, '').replace(scriptReg, '')

  const retStr = `${style}

<template>
  <div>
    ${md.render(templateStr)}
  </div>
</template>

${script}
  `

  // f.writeFile('./text.vue', retStr, () => {})

  return retStr
}
