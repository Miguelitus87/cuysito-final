export const database = [
    {
        id: 0,
        title: "Remera A",
        description: "Algodon",
        price: 10,
        idCategoria: 'remeras',
        pictureURL: "https://i.postimg.cc/RF6ZXtff/remera1.jpg",
        stock: 5,
    },
    {
        id: 1,
        title: "Remera B",
        description: "Modal",            
        price: 10,
        idCategoria: 'remeras',
        pictureURL: "https://i.postimg.cc/R0b07d34/remera2.jpg",
        stock: 5,
    },
    {
        id: 2,
        title: "Camisa A",
        description: "algodon",            
        price: 10,
        idCategoria: 'camisas',
        pictureURL: "https://i.postimg.cc/7PJ5NFMc/camisa1.jpg",
        stock: 5,
    },
    {
        id: 3,
        title: "Camisa B",
        description: "algodon",            
        price: 10,
        idCategoria: 'camisas',
        pictureURL: "https://i.postimg.cc/5Nc6Ksst/camisa2.jpg",
        stock: 5,

    },
    {
        id: 4,
        title: "Chomba A",
        description: "algodon",            
        price: 10,
        idCategoria: 'chombas',
        pictureURL: "https://i.postimg.cc/cLhCH00K/chomba1.jpg",
        stock: 5,

    },
    {
        id: 5,
        title: "Chomba B",
        description: "modal",            
        price: 10,
        idCategoria: 'chombas',
        pictureURL: "https://i.postimg.cc/8CC5f9zZ/chomba2.jpg",
        stock: 5,

    },
    {
        id: 6,
        title: "Pantalon A",
        description: "de ripstop",            
        price: 10,
        idCategoria: 'pantalones',
        pictureURL: "https://i.postimg.cc/g2mrmnFF/pantalon1.jpg",
        stock: 5,

    },
    {
        id: 7,
        title: "Pantalon B",
        description: "de ripstop",            
        price: 10,
        idCategoria: 'pantalones',
        pictureURL: "https://i.postimg.cc/vHWDJ5Kt/pantalon2.jpg",
        stock: 5,

    },

];

export const getList = (productos, timeout) => new Promise((res) =>
    setTimeout(() => {
        res(productos)
    }, timeout)
);




