const carMakers = [
    { id: 1, name: 'Audi' },
    { id: 2, name: 'BMW' },
    { id: 3, name: 'Mercedes' },
    { id: 4, name: 'Toyota' },
    { id: 5, name: 'Ford' },
]

const pricing = [
    { id: 1, range: '20000$-40000$' },
    { id: 2, range: '35000$-50000$' },
    { id: 3, range: '48000$-60000$' },
    { id: 4, range: '50000$-70000$' },
    { id: 5, range: '65000$-80000$' },
]
const type = [
    { id: 1, type: 'Used' },
    { id: 2, type: 'New' },
]

// eslint-disable-next-line react-refresh/only-export-components
const Categories = [
    {
        name: 'SUV',
        icon: 'https://img.icons8.com/?size=100&id=s8n9FPoRikPT&format=png&color=000000'
    },
    {
        name: 'Sedan',
        icon: 'https://img.icons8.com/?size=100&id=16553&format=png&color=000000'
    },
    {
        name: 'Hetchback',
        icon: 'https://img.icons8.com/?size=100&id=tdwu5rvAqh26&format=png&color=000000'
    },
    {
        name: 'Electric',
        icon: 'https://img.icons8.com/?size=100&id=X1JYdhI4ktv7&format=png&color=000000'
    },
    {
        name: 'Hybrid',
        icon: 'https://img.icons8.com/?size=100&id=cy8FC3SRB9Zb&format=png&color=000000'
    },

    {
        name: 'Convertible',
        icon: 'https://img.icons8.com/?size=100&id=16554&format=png&color=000000'
    },
    {
        name: 'Minivan',
        icon: 'https://img.icons8.com/?size=100&id=kWdtgNgqFXq1&format=png&color=000000'
    },
    {
        name: 'Coupe',
        icon: 'https://cdn-icons-png.flaticon.com/512/7281/7281628.png'
    },
    {
        name: 'truck',
        icon: 'https://img.icons8.com/?size=100&id=3562&format=png&color=000000'
    },
]

export default { type , carMakers, pricing , Categories }