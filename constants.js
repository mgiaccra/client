import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// Priority colors
const priority = [
    {
        id: 1,
        priority: 'High',
        image: 'https://res.cloudinary.com/tutcan/image/upload/v1579052390/red.jpg'
    },
    {
        id: 2,
        priority: 'Medium',
        image: 'https://res.cloudinary.com/tutcan/image/upload/v1579052390/yellow.jpg'
    },
    {
        id: 3,
        priority: 'Low',
        image: 'https://res.cloudinary.com/tutcan/image/upload/v1579052390/blue.jpg'
    },
]

export { width, height, priority }