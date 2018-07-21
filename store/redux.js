



/**
 * ACTION TYPES
 */

const GET_TOTAL_DISTANCE = 'GET_TOTAL_DISTANCE'





 /**
 * INITIAL STATE
 */

const distanceTraveled = 0

 /**
 * ACTION CREATORS
 */

const totalDistance = distance => ({ type: GET_TOTAL_DISTANCE, distance })




 /**
 * REDUCER
 */

export default function distance (state = 0, action) {
    switch(action.type) {
        case GET_TOTAL_DISTANCE: 
            return action.distance
        default: 
            return state
        }
}




 /**
 * THUNK CREATORS   may need a thunk for setTimeOut for announcing time and pace
 * not worth adding redux right now. Working on other
 * projects first
 */