import bcrypt from 'bcryptjs'

const data = {
    products: [
        {
            name: 'Currus Panther E-Scooter',
            price: 3799,
            category: 'E-Scooter',
            description: 'Technology Meets Comfort for Mobility',
            specification: '60V 35Ah H35E Li-ion batteries',
            shipping: 'To qualify for a warranty it is imperative',
            onSale: true
        },
        {
            name: 'Currus NF E-Scooter',
            price: 2799,
            category: 'E-Scooter',
            description: 'Accept it, riding an electric scooter is fun.',
            specification: 'blah blah blah',
            shipping: 'To qualify',
            onSale: false
        },
        {
            name: 'Spirit Beast Kick Stand',
            price: 79,
            category: 'Kick Stand',
            description: 'The spirit beast side stand that comes in three different colors.',
            specification: 'blah blah blah',
            shipping: 'To qualify',
            onSale: false
        },
        {
            name: 'Smart4u Smart Helmet',
            price: 49.00,
            category: 'Helmet',
            description: 'The Smart4u Helmet is made of lightweight yet super strong PC material on the outside. The',
            specification: 'blah blah blah',
            shipping: 'To qualify',
            onSale: false
        },
        {
            name: 'GUB Phone Mount',
            price: 24.99,
            category: 'E-Scooter',
            description: 'The GUB Aluminum Electric Scooter Phone.',
            specification: 'blah blah blah',
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
    ]
}

export default data;