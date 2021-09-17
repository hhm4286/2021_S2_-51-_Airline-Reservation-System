import firebase from 'firebase/app'
import 'firebase/firestore'
import {flightForm} from '../../pages/booking'


const WriteToCloudFirestore = () => {
    
        try {
            //send data
            firebase
            .firestore()
            .collection('flightBooking')
            .doc()
            .set(
               
            )
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }


export default WriteToCloudFirestore