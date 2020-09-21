export interface ITime {
    msec: number
    sec: number
    min: number
    hrs: number
}

export interface ImainReducer {
    coordinates: number[]
    time: ITime
}