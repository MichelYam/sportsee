import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from "./mockData";


export function getUserById(userId) {
    const user = USER_MAIN_DATA.find((elem) => elem.id == userId)
    return user
}


export function getDailyActivityByID(userId) {
    const userActivity = USER_ACTIVITY.find((elem) => elem.userId == userId)
    const test = refactorData(userActivity)
    // console.log(test)
    return test
}


function refactorData(data) {
    if (data) {
        const dailyActivity = [];

        for (let item of data.sessions) {
            // eslint-disable-next-line no-unused-vars
            const [yyyy, mm, dd] = item.day.split("-");

            dailyActivity.push({
                // day: `${dd}/${mm}`,
                day: `${dd}`,
                kilogram: item.kilogram,
                calories: item.calories,
            });
        }
        return dailyActivity;
    }
}


// export function getActivities(data) {
//     const activitiesArr = [];

//     for (let item of data) {
//         activitiesArr.push({

//         })
//     }
// }
export function averageSessions(userId) {
    const data = USER_AVERAGE_SESSIONS.find((elem) => elem.userId == userId)
    return data.sessions
}


export function getRadarPerformance(userId) {
    const data = USER_PERFORMANCE.find((elem) => elem.userId == userId);
    return data
}

export function getLabel(data) {
    const newArr = [];
    for (let kind of Object.keys(data.kind)) {
        for (let item of data.data) {
            if (kind == item.kind) {
                newArr.push({
                    kind: data.kind[kind],
                    value: item.value
                })
            }
        }
    }
    return newArr;
}


export function getScoreOfUser(userId) {
    const userInfo = getUserById(userId)

    return userInfo.todayScore ? userInfo.todayScore : userInfo.score
}