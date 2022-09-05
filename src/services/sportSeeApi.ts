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

// type Api = {
//     service: string,
//     userId: string,
// }

/**
 * get data from Api
 * @param {string} service 
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const sportSeeAPi = async (service: string, userId: string) => {
    const endpoint = getEndPoints(service, userId);
    if (!endpoint) return
    try {
        const url = `${baseUrl}/${endpoint}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get url from service and id
 * @param {*} service 
 * @param {*} userId - the id of user
 * @returns url
 */
const getEndPoints = (service: string, userId: string) => {
    switch (service) {
        case "activity":
            return `user/${userId}/activity`;
        case "average-sessions":
            return `user/${userId}/average-sessions`;
        case "performance":
            return `user/${userId}/performance`;
        case "userInfo":
            return `user/${userId}`;
        default:
            console.error(`${service} not found`);
    }
}
/**
 * Get user information
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns Object
 */
export const getUserInfo = async (service: string, userId: string) => {
    const data = await sportSeeAPi(service, userId);
    return userModel(data.data);
}

/**
 * Get daily activity of user
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns 
 */
export const getDailyActivity = async (service: string, userId: string) => {
    const { data } = await sportSeeAPi(service, userId);
    if (data) {
        const sessions = data.sessions.map(item => {
            const [yyyy, mm, dd] = item.day.split("-");
            return ({ ...item, day: dd })

        })
        return activitiesModel({ ...data, sessions })
    }
}

/**
 * Get average session of user 
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns 
 */
export const getAverageSessions = async (service: string, userId: string) => {
    const { data } = await sportSeeAPi(service, userId);
    if (data) {
        const sessions = data.sessions.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...data, sessions });
    }
}

/**
 * Get performance of user 
 * @param {*} service - service to get the data
 * @param {*} userId - the id of user
 * @returns 
 */
export const getRadarPerformance = async (service, userId) => {
    const { data } = await sportSeeAPi(service, userId);
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data.data) {
            if (item.kind.toString() === kind) {
                item.kind = activityTitleFR[kind]
            }
        }
    }
    return performanceModel(data);
}
