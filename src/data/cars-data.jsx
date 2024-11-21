
const pricing = [
    { id: 1, range: '1000$-25000$' },
    { id: 2, range: '20000$-40000$' },
    { id: 3, range: '35000$-50000$' },
    { id: 4, range: '48000$-60000$' },
    { id: 5, range: '50000$-70000$' },
    { id: 6, range: '65000$-80000$' },
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

const carSpecifications = [
    { name: "category", label: "Category" },
    { name: "condition", label: "Condition" },
    { name: "maker", label: "Maker" },
    { name: "year", label: "Year" },
    { name: "mileage", label: "Mileage" },
    { name: "type", label: "Type" },
    { name: "driveType", label: "Drive Type" },
    { name: "cylinder", label: "Cylinder" },
    { name: "color", label: "Color" },
    { name: "fuelType", label: "Fuel Type" },
    { name: "vin", label: "VIN" },
    { name: "engineSize", label: "Engine Size" },
    { name: "transmission", label: "Transmission" },
];

export default {pricing , Categories , carSpecifications}