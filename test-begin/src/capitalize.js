const capitalize = (text) => {
  if (typeof text !== 'string' || text.length === 0 ) {
    return ''
  }
  const firstChar = text[0].toUpperCase();
  const otherChar = text.slice(1).toLowerCase();
  return firstChar + otherChar; 

}

export default capitalize