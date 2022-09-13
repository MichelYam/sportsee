export interface UserModel {
    id: string | number,
    keyData: {
        calorieCount: number,
        carbohydrateCount: number,
        lipidCount: number,
        proteinCount: number,
    },
    // keyData: Record<string, number>;
    todayScore?: number,
    score?: number,
    userInfos: {
        firstName: string,
        lastName: string,
        age: number,
    }
}

export interface ActivityModel {
    userId: string | number,
    sessions: {
        day: string,
        kilogram: number,
        calories: number,
    }[],
}

export interface PerformanceModel {
    userId: string | number,
    kind: Record<number, string>;
    data: {
        value: number,
        kind: string | number,
    }[],
}

export interface SessionModel {
    userId: string | number,
    sessions: {
        day: string,
        sessionLength: number,
    }[],
}