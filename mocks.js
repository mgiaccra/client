const requests = [
    {
        id: 1,
        title: 'Bugs and Insects',
        description: 'There are ants in the main hall.',
        user: {
            id: 1,
            name: 'Donald Mensah',
            avatar: '',
        },
        priority: 'high',
        status: 'pending',
        ticketNo: 3,
        createdAt: '',
        updatedAt: ''
    },
    {
        id: 2,
        title: 'Electricals',
        description: 'The light bulb in the lecture room has gone off.',
        user: {
            id: 2,
            name: 'Betty Ofori',
            avatar: '',
        },
        priority: 'low',
        status: 'pending',
        ticketNo: 2,
        createdAt: '',
        updatedAt: ''
    },
    {
        id: 3,
        title: 'Toilet and Bathroom',
        description: 'The water from the closet opposite the lecture hall door has stopped flowing .',
        user: {
            id: 3,
            name: 'Kevin Dahl',
            avatar: '',
        },
        priority: 'high',
        status: 'pending',
        ticketNo: 3,
        createdAt: '',
        updatedAt: ''
    }
]

const chart = []

const user = {
    avatar: '',
    name: 'Yasmine Adams',
    email: 'msyasmineadams@gmail.com'
}

export { requests, chart, user }