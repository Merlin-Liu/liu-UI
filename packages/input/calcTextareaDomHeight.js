const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

export default function(textareaDom, minRows = 1, maxRows = null) {
  const {contextStyle, boxSizing, paddingVertical, borderVertical} = caleDomStyle(textareaDom)

  const hiddenTextareaDom = document.createElement('textarea')

  hiddenTextareaDom.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
  hiddenTextareaDom.value = textareaDom.value || textareaDom.placeholder || ''
  document.body.appendChild(hiddenTextareaDom)

  let height = hiddenTextareaDom.scrollHeight
  const result = {}

  if (boxSizing === 'border-box') {
    height = height + borderVertical
  } else if (boxSizing === 'content-box') {
    height = height - paddingVertical
  }

  hiddenTextareaDom.value = ''
  const singleRowHeight = hiddenTextareaDom.scrollHeight - paddingVertical

  let minHeight = minRows * singleRowHeight
  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingVertical + borderVertical
  }
  height = Math.max(height, minHeight)
  result.minHeight = minHeight + 'px'

  if (maxRows !== null) {
    let maxHeight = maxRows * singleRowHeight
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingVertical + borderVertical
    }
    height = Math.min(height, maxHeight)
  }
  result.height = height + 'px'

  const parent = hiddenTextareaDom.parentNode
  parent && parent.removeChild(hiddenTextareaDom)

  return result
}

function caleDomStyle(dom) {
  const style = window.getComputedStyle(dom)
  const boxSizing = style.getPropertyValue('box-sizing')
  const paddingVertical = (parseFloat(style.getPropertyValue('padding-top')) + parseFloat(style.getPropertyValue('padding-bottom')))
  const borderVertical = (parseFloat(style.getPropertyValue('border-top-width')) + parseFloat(style.getPropertyValue('border-bottom-width')))
  const contextStyle = CONTEXT_STYLE.map(attr => `${attr}: ${style.getPropertyValue(attr)}`).join(';')

  return {contextStyle, boxSizing, paddingVertical, borderVertical}
}
