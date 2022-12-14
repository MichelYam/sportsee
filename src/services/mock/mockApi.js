import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from "./mockData";

//Models
import { userModel, performanceModel, activitiesModel, sessionsModel } from "../models/index";

const activityTitleFR = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
};

/**
 * Get user information
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns Object
 */
export const getUserInfo = (userId) => {
    const userData = USER_MAIN_DATA.find((elem) => elem.id === parseInt(userId));
    return userModel(userData);
}

/**
 * Get daily activity of user
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns
 */
export const getDailyActivity = (userId) => {
    const userData = USER_ACTIVITY.find((elem) => elem.userId === parseInt(userId));
    if (userData) {
        const sessions = userData.sessions.map(item => {
            const dd = item.day.split("-")[2];
            return ({ ...item, day: dd })

        })
        return activitiesModel({ ...userData, sessions })
    }
}

/**
 * Get average session of user
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns
 */
export const getAverageSessions = (userId) => {
    const userData = USER_AVERAGE_SESSIONS.find((elem) => elem.userId === parseInt(userId));
    if (userData) {
        const sessions = userData.sessions.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...userData, sessions });
    }
}

/**
 * Get performance of user
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns
 */
export const getRadarPerformance = (userId) => {
    const userData = USER_PERFORMANCE.find((elem) => elem.userId === parseInt(userId));
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of userData.data) {
            if (item.kind.toString() === kind) {
                item.kind = activityTitleFR[kind]
            }
        }
    }
    return performanceModel(userData);
}
