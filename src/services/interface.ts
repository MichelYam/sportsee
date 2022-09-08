export interface UserModel {
    id: string,
    keyData: {
        calorieCount: number,
        carbohydrateCount: number,
        lipidCount: number,
        proteinCount: number
    }
    // keyData: Record<string, number>;
    todayScore?: number | null,
    score?: number | null,
    userInfos:
    {
        firstName: string,
        lastName: string,
        age: number
    }
}

export interface ActivityModel {
    userId: string,
    sessions:
    {
        day: string,
        kilogram: number,
        calories: number
    }[],

}

export interface PerformanceModel {
    userId: string,
    kind: Record<number, string>;
    data: {
        value: number,
        kind: number
    }[],
}

export interface SessionModel {
    userId: string,
    sessions: {
        day: number,
        sessionLength: number
    }[],

}