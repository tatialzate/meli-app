
export const validateCharacters = ( text ) => {
    let regex = /[^0-9A-Za-zÁÉÍÓÚáéíóúñÑ ]+/i;
    
    return text.replace(regex, '');
}