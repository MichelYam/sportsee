import { string } from "prop-types"

export interface UserModel {
    id: string,
    keyData: {
        calorieCount: number,
        carbohydrateCount: number,
        lipidCount: number,
        proteinCount: number
    }
    todayScore: number,
    score: number,
    userInfos:
    {
        firstName: string,
        lastName: string,
        age: number
    }
}

export interface ActivityModel {
    userId: string,
    sessions: [{
        day: string,
        kilogram: number,
        calories: number
    }
    ]
}

export interface PerformanceModel {
    userId: string,
    sessions: [{
        day: number,
        sessionLength: number
    }]
}

export interface SessionModel {
    userId: string,
    kind: {
        [key: string]: string
    },
    data: [
        {
            value: number,
            kind: number
        }
    ]
}