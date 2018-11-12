export function createMarkup(content) {
  return {__html: content}
}

export function scrollIt(offset) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': offset
  })
}