function decodeBits(bits) {
    // Trim zeros
    bits = bits.replace(/(^0+|0+$)/g, '')
    
    // Find transmission rate
    var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function(b) { return b.length }))
    
    // Convert to morse code
    bits = bits
      .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
      .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
      .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
      .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')
    
    return bits
  }
  
  function decodeMorse(message) {
    return message
      .replace(/   /g, ' _ ')
      .split(' ')
      .map(function(letter) { return letter === '_' ? ' ' : MORSE_CODE[letter] })
      .join('')
  }

console.log(decodeBits('011000000111111001100'));