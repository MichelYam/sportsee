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
 * @param {string} userId - the id of user
 * @returns Object
 */
export const getUserInfo = (userId: string, processError: (codeError: string) => void) => {
    const userData = USER_MAIN_DATA.find((elem: { id: number }) => elem.id === parseInt(userId));
    if (!userData) {
        processError("Data not found");
    } else {
        return userModel(userData!);
    }
}

/**
 * Get daily activity of user
 * @param {string} userId - the id of user
 * @returns
 */
export const getDailyActivity = (userId: string, processError: (codeError: string) => void) => {
    const userData = USER_ACTIVITY.find((elem: { userId: number; }) => elem.userId === parseInt(userId));
    if (userData) {
        const sessions = userData.sessions.map((item: { day: string, kilogram: number, calories: number }) => {
            const day = item.day.split("-")[2];
            return ({ ...item, day: day })

        })
        return activitiesModel({ ...userData, sessions })
    }
}

/**
 * Get average session of user
 * @param {string} userId - the id of user
 * @returns
 */
export const getAverageSessions = (userId: string, processError: (codeError: string) => void) => {
    const userData = USER_AVERAGE_SESSIONS.find((elem: { userId: number; }) => elem.userId === parseInt(userId));
    if (userData) {
        const sessions = userData.sessions.map((a: { day: number, sessionLength: number }) => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...userData, sessions });
    }
}

/**
 * Get performance of user
 * @param {string} userId - the id of user
 * @returns
 */
export const getRadarPerformance = (userId: string, processError: (codeError: string) => void) => {
    const userData = USER_PERFORMANCE.find((elem: { userId: number; }) => elem.userId === parseInt(userId));
    console.log(userData)
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of userData!.data) {
            if (item.kind.toString() === kind) {
                item.kind = parseInt(activityTitleFR[kind])
            }
        }
    }
    return performanceModel(userData!);
}