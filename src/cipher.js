const cipher = {  
  encode: function (textarea1, deslocamento) { 
    if (!textarea1 || !deslocamento) {
      throw new TypeError('bad argurments');
    }
    let mensagem = ""
    for (let i = 0; i < textarea1.length; i++) {  
      const formula = ((textarea1.charCodeAt(i) - 65 + deslocamento) % 26) + 65;
      mensagem += String.fromCharCode(formula);}
    return mensagem},

  decode: function (textarea1, deslocamento) {
    if (!textarea1 || !deslocamento) {
      throw new TypeError('bad argurments');
    }
    let mensagem = ""       
    for (let i = 0; i < textarea1.length; i++) {
      const formula = ((textarea1.charCodeAt(i) - 65 - deslocamento) % 26) + 65;   
      mensagem += String.fromCharCode(formula);} 
    return mensagem}

}


export default cipher;