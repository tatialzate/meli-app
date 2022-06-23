
export const getProductState = ( state ) => {

    const states = [
        { name: 'new', description: 'Nuevo' },
        { name: 'not_specified', description: 'No especificado por el vendedor'},
        { name: 'used', description: 'Usado'}
    ];

    return states.find( elem => elem.name === state);
}