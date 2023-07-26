const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/.{10}/g); //делит строку на кол-во символов и возвращает массив
    let res = '';
    let sym = '';

    arr.forEach(e => {
        if (e === '**********') {
            res += ' ';
        } else {
            let elem = e.match(/../g);
            for(let i = 0; i < elem.length; i++) {
                if(elem[i] === '10') {
                sym += '.';
                } else if (elem[i] === '11') {
                sym += '-';
                }
            }
        }

        for(let prop in MORSE_TABLE){
            if(prop === sym) {
            res += MORSE_TABLE[prop];
            }
        }
        sym = '';
    });

    return res;
}

module.exports = {
    decode
}