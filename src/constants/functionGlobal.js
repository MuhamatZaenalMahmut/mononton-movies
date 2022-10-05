import { Alert, Dimensions, LayoutAnimation, Platform, ToastAndroid } from 'react-native';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

export const currencyFloat = (number) => {
    let num = parseFloat(number)
    if(!isNaN(num)){
        if(num.toString().indexOf('.') != -1){
            return 'Rp ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        } else {
            var rupiah = '';
            var numrev = num.toString().split('').reverse().join('');
            for (var i = 0; i < numrev.length; i++) if (i % 3 == 0) rupiah += numrev.substr(i, 3) + '.';

            let ret = rupiah.split('', rupiah.length - 1).reverse().join('')

            if(ret < 0){
                return '- IDR ' + ret.replace('-', '')
            } else {
                return 'IDR ' + ret
            }
        }
    } else {
        return 0
    }
}

export const formatDate = (date, short) => {
    return short ? moment(date).format('DD MMM YYYY') : moment(date).format('DD MMMM YYYY')
}

export const onRotate = () => {
    const { width, height } = Dimensions.get('window')
    return height >= width
}

export const Notif = (title, message) => {
    if (message) {
        Alert.alert(title, message)
    }
}

export const ToastConnection = () => {
    Alert.alert('Perhatian', 'Tidak dapat memproses data, silahkan coba kembali')
}

export const AnimationLayout = () => {
    return LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}

export const showToast = async (msg) => {
    if (Platform.OS == 'ios') {
        Toast.show(`${msg}`, Toast.SHORT);
    } else {
        ToastAndroid.show(`${msg}`, ToastAndroid.SHORT)
    }
}