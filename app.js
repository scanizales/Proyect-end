
let cifrado = '^[()`~^*/?`[()^+`-~()#[$()/~()%i[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^i{()*~¡[$[{()¡[()?=[]`i¬]()¿()[{;+[$__~()`~]=i]+~'
const caracteres = {
    '?': 'a',
    '[': 'e',
    '~':'o',
    '+': 'u',
    '()': ' ',
    '¬': 'ó',
    '}': 'q',
    '__':'z',
    '^' : 'm',
    '{':'s',
    '=':'t',
    ']':'n',
    '¿':'y',
    ';':'f',
    '$':'r',
    '¡':'d',
    '!':'j',
    '%':'b',
    '*':'p',
    '`': 'c',
    '/': 'l',   
    '-':'h',
    '#':'v',


}
Object.keys(caracteres).forEach(caracter => {
    const regex = caracter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    cifrado = cifrado.replace(new RegExp(regex, 'g'), caracteres[caracter]);
});
  
console.log(cifrado)
