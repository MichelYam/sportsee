import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from "./mockData";

//Models
import { userModel, performanceModel, activitiesModel, sessionsModel } from "../models/index";

interface LooseObject {
    [key: string]: string
}

const activityTitleFR: LooseObject = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
};

/**
 * Get user information
 * @param {*} userId - the id of user
 * @returns Object
 */
export const getUserInfo = (userId: string) => {
    const userData = USER_MAIN_DATA.find((elem: { id: number; }) => elem.id === parseInt(userId));
    return userModel(userData);
}

/**
 * Get daily activity of user
 * @param {*} userId - the id of user
 * @returns
 */
export const getDailyActivity = (userId: string) => {
    const userData = USER_ACTIVITY.find((elem: { userId: number; }) => elem.userId === parseInt(userId));
    if (userData) {
        const sessions = userData.sessions.map((item: { day: string; }) => {
            const day = item.day.split("-")[2];
            return ({ ...item, day: day })

        })
        return activitiesModel({ ...userData, sessions })
    }
}

/**
 * Get average session of user
 * @param {*} userId - the id of user
 * @returns
 */
export const getAverageSessions = (userId: string) => {
    const userData = USER_AVERAGE_SESSIONS.find((elem: { userId: number; }) => elem.userId === parseInt(userId));
    if (userData) {
        const sessions = userData.sessions.map((a: { day: number; }) => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...userData, sessions });
    }
}

/**
 * Get performance of user
 * @param {*} userId - the id of user
 * @returns
 */
export const getRadarPerformance = (userId: string) => {
    const userData = USER_PERFORMANCE.find((elem: { userId: number; }) => elem.userId === parseInt(userId));
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of userData.data) {
            if (item.kind.toString() === kind) {
                item.kind = activityTitleFR[kind]
            }
        }
    }
    return performanceModel(userData);
}