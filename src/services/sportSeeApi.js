//Models
import { userModel, performanceModel, activitiesModel, sessionsModel } from "./models";

const baseUrl = "http://localhost:3030";

const activityTitleFR = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
};

/**
 * get data from Api
 * @param {string} service - service to get the data
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const sportSeeAPi = async (service, userId, processError) => {
    const endpoint = getEndPoints(service, userId);
    if (!endpoint) return
    const url = `${baseUrl}/${endpoint}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.data) {
            processError("probleme_data")
        }
        return data;
    } catch (error) {
        processError("api_not_working")
        console.log(error)
    }
}

/**
 * Get url from service and id
 * @param {string} service - service to get the data
 * @param {string} userID - the id of user
 * @returns url
 */
const getEndPoints = (service, userID) => {
    switch (service) {
        case "activity":
            return `user/${userID}/activity`;
        case "average-sessions":
            return `user/${userID}/average-sessions`;
        case "performance":
            return `user/${userID}/performance`;
        case "userInfo":
            return `user/${userID}`;
        default:
            console.error(`${service} not found`);
    }
}
/**
 * Get user information
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const getUserInfo = async (userId, processError) => {
    const data = await sportSeeAPi("userInfo", userId, processError);
    return userModel(data.data);
}

/**
 * Get daily activity of user
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const getDailyActivity = async (userId, processError) => {
    const { data } = await sportSeeAPi("activity", userId, processError);
    if (data) {
        const sessions = data.sessions.map(item => {
            const dd = item.day.split("-")[2];
            return ({ ...item, day: dd })

        })
        return activitiesModel({ ...data, sessions })
    }
}

/**
 * Get average session of user 
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const getAverageSessions = async (userId, processError) => {
    const { data } = await sportSeeAPi("average-sessions", userId, processError);
    if (data) {
        const sessions = data.sessions.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...data, sessions });
    }
}

/**
 * Get performance of user 
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const getRadarPerformance = async (userId, processError) => {
    const { data } = await sportSeeAPi("performance", userId, processError);
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data.data) {
            if (item.kind.toString() === kind) {
                item.kind = activityTitleFR[kind]
            }
        }
    }
    return performanceModel(data);
}
