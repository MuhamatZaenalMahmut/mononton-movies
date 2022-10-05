import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

module.exports = {
    menu:[
        {
            title: 'History',
            icon: 'clock',
            type: Octicons,
            menu: ''
        },
        {
            title: 'Watch Later',
            icon: 'book-plus-outline',
            type: MaterialCommunityIcons,
            menu: 'Collections'
        },
        {
            title: 'My Point',
            icon: 'star-circle-outline',
            type: MaterialCommunityIcons,
            menu: ''
        },
        {
            title: 'Language',
            icon: 'translate',
            type: MaterialCommunityIcons,
            menu: ''
        },
        {
            title: 'Subtitle Translation',
            icon: 'subtitles-outline',
            type: MaterialCommunityIcons,
            menu: ''
        },
        {
            title: 'Setting',
            icon: 'settings-outline',
            type: Ionicons,
            menu: ''
        },
        {
            title: 'FAQ',
            icon: 'ios-chatbubbles-outline',
            type: Ionicons,
            menu: ''
        },
        {
            title: 'Feedback',
            icon: 'question',
            type: Octicons,
            menu: ''
        },
    ],
}