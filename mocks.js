const requests = [
    {
        id: 1,
        title: 'Bugs and Insects',
        description: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced',
        user: {
            id: 1,
            name: 'Donald Mensah',
            avatar: 'https://res.cloudinary.com/tutcan/image/upload/v1553985443/idzgeayzutw2mzdwxqvk.jpg',
        },
        priority: 'low',
        status: 'pending',
        ticketNo: 3,
        createdAt: '2020-01-11 20:03:50.034',
        updatedAt: '2020-01-11 20:03:50.034'
    },
    {
        id: 2,
        title: 'Electricals',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.',
        user: {
            id: 2,
            name: 'Yasmine Adams',
            avatar: 'https://res.cloudinary.com/tutcan/image/upload/v1553984598/kfne9up44v1otcoyytno.jpg',
        },
        priority: 'medium',
        status: 'pending',
        ticketNo: 2,
        createdAt: '2019-12-16 20:03:50.034',
        updatedAt: '2019-12-16 20:03:50.034'
    },
    {
        id: 3,
        title: 'Toilet and Bathroom',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring whi',
        user: {
            id: 3,
            name: 'Kevin Dahl',
            avatar: 'https://res.cloudinary.com/tutcan/image/upload/v1554026147/exkyfcfadifc90ugyyhb.jpg',
        },
        priority: 'high',
        status: 'pending',
        ticketNo: 3,
        createdAt: '2019-11-16 20:03:50.034',
        updatedAt: '2019-11-16 20:03:50.034'
    },
    {
        id: 4,
        title: 'Lectures',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring whi',
        user: {
            id: 4,
            name: 'James Duffour',
            avatar: 'https://res.cloudinary.com/tutcan/image/upload/v1561444588/uxh6hkamdizchu2zrx0n.jpg',
        },
        priority: 'medium',
        status: 'pending',
        ticketNo: 4,
        createdAt: '2019-11-16 20:03:50.034',
        updatedAt: '2019-11-16 20:03:50.034'
    },
    {
        id: 5,
        title: 'Lectures',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring whi',
        user: {
            id: 5,
            name: 'James Duffour',
            avatar: 'https://res.cloudinary.com/tutcan/image/upload/v1560033209/u8tldmcsgy6yd4gjn3nk.jpg',
        },
        priority: 'medium',
        status: 'pending',
        ticketNo: 5,
        createdAt: '2019-11-16 20:03:50.034',
        updatedAt: '2019-11-16 20:03:50.034'
    }
]

const chart = [
    1.1,
    3,
    1.5,
    2.3,
    3.2,
    7,
    8.2,
    1.2,
    7,
    1.2,
    8,
    3.8,
    5.8,
    3.9,
    5.1,
    0.1,
    6
]


const user = {
    id: 2,
    avatar: 'https://res.cloudinary.com/tutcan/image/upload/v1553984598/kfne9up44v1otcoyytno.jpg',
    name: 'Yasmine Adams',
    email: 'msyasmineadams@gmail.com'
}

export { requests, chart, user }