export const initialState = {
    data: [],
    isLoading: true,
    error: null
}

export const productDetail = {
    author: {},
    item: {
        id:'MLA1122438858',
        title:'Caniches Mini Toy',
        price:{
            currency:'ARS',
            amount:25998,
            decimals:''
        },
        picture:'https://http2.mlstatic.com/D_NQ_NP_991408-MLA49037315188_022022-F.webp',
        condition:'new',
        free_shipping:false,
        sold_quantity:5,
        description:'Excelente Cachorros vacunado y desparacitado bien cuidados y criado con amor los publicado es apartir de la segunda foto primer fotos es rojo otro link'
    }
}

export const productsList = {
    author: {},
    categories: [],
    items: [
        {
            id:'MLA1122438858',
            title:'Caniches Mini Toy',
            price:{
                currency:'ARS',
                amount:25998,
                decimals:''
            },
            picture:'https://http2.mlstatic.com/D_NQ_NP_991408-MLA49037315188_022022-F.webp',
            condition:'new',
            free_shipping:false,
            sold_quantity:5
        },
        {
            id:'MLA1108161697',
            title:'Cachorros Golden Retriever 10',
            price:{
                currency:'ARS',
                amount:85000,
                decimals:''
            },
            picture:'https://http2.mlstatic.com/D_NQ_NP_957099-MLA47871728191_102021-F.webp',
            condition:'new',
            free_shipping:false,
            sold_quantity:25
        }
    ]
}