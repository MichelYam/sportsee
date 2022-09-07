//Models
import { userModel, performanceModel, activitiesModel, sessionsModel } from "./models";

const baseUrl = "http://localhost:3030";
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
 * get data from Api
 * @param {string} service - service to get the data
 * @param {string} userId - the id of user
 * @returns data object
 */
export const sportSeeAPi = async (service: string, userId: string) => {
    const endpoint = getEndPoints(service, userId);
    if (!endpoint) return
    const url = `${baseUrl}/${endpoint}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get url from service and id
 * @param {string} service - service to get the data
 * @param {string} userId - the id of user
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
 * @param {string} userId - the id of user
 * @returns Promise
 */
export const getUserInfo = async (userId: string) => {
    const data = await sportSeeAPi("userInfo", userId);
    return userModel(data.data);
}

/**
 * Get daily activity of user
 * @param {string} userId - the id of user
 * @returns 
 */
export const getDailyActivity = async (userId: string) => {
    const { data } = await sportSeeAPi("activity", userId);
    if (data) {
        const sessions = data.sessions.map((item: { day: { split: (arg0: string) => [any, any, any]; }; }) => {
            const [yyyy, mm, dd] = item.day.split("-");
            return ({ ...item, day: dd })

        })
        return activitiesModel({ ...data, sessions })
    }
}

/**
 * Get average session of user 
 * @param {string} userId - the id of user
 * @returns 
 */
export const getAverageSessions = async (userId: string) => {
    const { data } = await sportSeeAPi("average-sessions", userId);
    if (data) {
        const sessions = data.sessions.map((a: { day: number; }) => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...data, sessions });
    }
}

/**
 * Get performance of user 
 * @param {string} userId - the id of user
 * @returns 
 */
export const getRadarPerformance = async (userId: string) => {
    const { data } = await sportSeeAPi("performance", userId);
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data.data) {
            if (item.kind.toString() === kind) {
                item.kind = activityTitleFR[kind]
            }
        }
    }
    return performanceModel(data);
}