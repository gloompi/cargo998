export function createMarkup(content) {
  return {__html: content}
}

export function scrollIt(element, offset = 0) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 3000 + offset
  })
}