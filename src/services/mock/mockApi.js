import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from "./mockData";

const activityTitleFR = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Itensité",
};

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
                day: `${dd}`,
                kilogram: item.kilogram,
                calories: item.calories,
            });
        }
        return dailyActivity;
    }
}

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
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data.data) {
            if (item.kind == kind) {
                newArr.push({
                    kind: activityTitleFR[kind],
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

// const DataRadarTitle = dataReverse.map((data) => {
//     switch (data.kind) {
//         case 1:
//             return { ...data, kind: "Intensité" };
//         case 2:
//             return { ...data, kind: "Vitesse" };
//         case 3:
//             return { ...data, kind: "Force" };
//         case 4:
//             return { ...data, kind: "Endurance" };
//         case 5:
//             return { ...data, kind: "Energie" };
//         case 6:
//             return { ...data, kind: "Cardio" };
//         default:
//             return { ...data };
//     }
// });
// console.log(DataRadarTitle)