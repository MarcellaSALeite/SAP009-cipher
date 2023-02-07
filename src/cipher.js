const cipher = {
    encode: function (deslocamento, textarea1) {        
        if (typeof textarea1 !== "string" || textarea1 === "" || deslocamento === "" || textarea1 === 0 || deslocamento ===0) {
        throw new TypeError;
         }

         let mensagem = ""
        for (let i = 0; i < textarea1.length; i++) {
            const formula = ((textarea1.charCodeAt(i) - 65 + deslocamento) % 26) + 65;
            mensagem += String.fromCharCode(formula);
        }
        return mensagem
    },
    decode: function (deslocamento, textarea1) {
        if (typeof textarea1 !== "string" || textarea1 === "" || deslocamento ==="" || textarea1 === 0 || deslocamento ===0) {
            throw new TypeError;
             }
        let mensagem = ""
        for (let i = 0; i < textarea1.length; i++) {
            const formula = ((textarea1.charCodeAt(i) - 65 - deslocamento) % 26) + 65;
            mensagem += String.fromCharCode(formula);
        } 
        return mensagem
    }
};
export default cipher.js;