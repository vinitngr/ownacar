const carMakers = [
    { id: 1, name: 'Audi' },
    { id: 2, name: 'BMW' },
    { id: 3, name: 'Mercedes' },
    { id: 4, name: 'Toyota' },
    { id: 5, name: 'Ford' },
]

const pricing = [
    { id: 1, range: '20,000$-40,000$' },
    { id: 2, range: '35,000$-50,000$' },
    { id: 3, range: '48,000$-60,000$' },
    { id: 4, range: '50,000$-70,000$' },
    { id: 5, range: '65,000$-80,000$' },
]
const type = [
    { id: 1, type: 'New' },
    { id: 2, type: 'Old' },
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