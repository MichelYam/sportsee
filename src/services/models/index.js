/**
 * 
 * @param {object} data 
 * @returns 
 */
export const userModel = (data) => {
    return {
        id: data?.id,
        keyData: {
            calorieCount: data?.keyData?.calorieCount,
            carbohydrateCount: data?.keyData?.carbohydrateCount,
            lipidCount: data?.keyData?.lipidCount,
            proteinCount: data?.keyData?.proteinCount,
        },
        todayScore: data?.todayScore ?? data?.score,
        userInfos: {
            firstName: data?.userInfos?.firstName,
            lastName: data?.userInfos?.lastName,
            age: data?.userInfos?.age,
        }
    }
}
/**
 * 
 * @param {object} data 
 * @returns 
 */
export const activitiesModel = (data) => {
    return {
        userId: data?.userId,
        sessions: [...data?.sessions],
    }
}

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const performanceModel = (data) => {
    return {
        userId: data?.userId,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [...data?.data].reverse(),
    }
}

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const sessionsModel = (data) => {
    return {
        userId: data?.userId,
        sessions: [...data?.sessions]
    }
}