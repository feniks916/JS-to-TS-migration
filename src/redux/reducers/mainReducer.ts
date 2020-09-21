import { ImainReducer } from '../../types'

const initialState: ImainReducer = {
    coordinates: [45.04, 39.00],
    time: {
        msec: 0,
        sec: 0,
        min: 0,
        hrs: 0
    }
}


export default (state = initialState, action: any): ImainReducer => {

    return state;

}