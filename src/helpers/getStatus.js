export const getStatus = (status) => {
    const statusList = [
        { status: 404, message: 'El producto no fue encontrado.' },
        { status: 400, message: 'Ingresa un criterio de búsqueda.' },
        { status: 204, message: 'No se encontraron resultados.' },
        { status: 503, message: 'No es posible procesar tu solicitud, inténtalo más tarde.' }
    ]

    return statusList.find( elem => elem.status === status );
}