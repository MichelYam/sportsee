//Models
export const userModel = (data) => {
    return {
        id: data.id,
        keyData: {
            calorieCount: data.keyData.calorieCount,
            carbohydrateCount: data.keyData.carbohydrateCount,
            lipidCount: data.keyData.lipidCount,
            proteinCount: data.keyData.proteinCount,
        },
        todayScore: data.todayScore ?? data?.score,
        userInfos: {
            firstName: data.userInfos.firstName,
            lastName: data.userInfos.lastName,
            age: data.userInfos.age,
        }
    }
}

export const activitiesModel = (data) => {
    return {
        userId: data.userId,
        sessions: [...data.sessions],
    }
}

//perf
export const performanceModel = (data) => {
    const test = {
        userId: data.userId,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [...data.data].reverse(),
    }
    return test
}

//sessions
export const sessionsModel = (data) => {
    return {
        userId: data.userId,
        sessions: [...data.sessions]
    }
}