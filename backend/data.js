import bcrypt from 'bcryptjs'

const data = {
    products: [
        {
            name: 'Currus Panther E-Scooter',
            priceUSD: 3799,
            priceCAD: 4799,
            category: 'E-Scooter',
            quantity: 5,
            description: 'Technology Meets Comfort for Mobility',
            quick: 'blah blah blah',
            specification: ['blah blah blah'],
            shipping: 'To qualify for a warranty it is imperative',
            onSale: true
        },
        {
            name: 'Currus NF E-Scooter',
            priceUSD: 2799,
            priceCAD: 3799,
            category: 'E-Scooter',
            quantity: 10,
            description: 'Accept it, riding an electric scooter is fun.',
            quick: 'blah blah blah',
            specification: ['blah blah blah'],
            shipping: 'To qualify',
            onSale: false
        },
        {
            name: 'Spirit Beast Kick Stand',
            priceUSD: 79,
            priceCAD: 179,
            category: 'Kick Stand',
            quantity: 7,
            description: 'The spirit beast side stand that comes in three different colors.',
            quick: 'blah blah blah',
            specification: ['blah blah blah'],
            shipping: 'To qualify',
            onSale: false
        },
        {
            name: 'Smart4u Smart Helmet',
            priceUSD: 49.00,
            priceCAD: 149.00,
            category: 'Helmet',
            quantity: 0,
            description: 'The Smart4u Helmet is made of lightweight yet super strong PC material on the outside. The',
            quick: 'blah blah blah',
            specification: ['blah blah blah'],
            shipping: 'To qualify',
            onSale: false
        },
        {
            name: 'GUB Phone Mount',
            priceUSD: 24.99,
            priceCAD: 150,
            category: 'E-Scooter',
            quantity: 1,
            description: 'The GUB Aluminum Electric Scooter Phone.',
            quick: 'blah blah blah',
            specification: ['blah blah blah'],
            shipping: 'To qualify',
            onSale: true
        },
    ],
    blogs: [
        {
            title: 'Fulfill Your Need for SPeed with the Currus Panther Electric Scooter',
            content: 'If you think electric scooters are good only for local communiting and cannot offer high speed, think again.',
            date: Date.now(),
            author: 'Rachird Farissi',
            tags: [
                   'e-scooter', 'post', 'accessories'
            ]
        }
    ],
    users: [
        {
            name: 'Sample User',
            email: 'sample@sample.com',
            password: '1234567',
            orders: []
        }
    ]
}

export default data;