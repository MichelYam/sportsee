import { useEffect, useState } from "react";
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
 * extract data from SportSee API
 * @param {*} url 
 * @returns data from specific service
 */
export const useSportSeeAPi = (service, userID) => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const endpoint = getEndPoints(service, userID);

    useEffect(() => {
        if (!endpoint) return
        setLoading(true);
        const fetchData = async () => {
            try {
                const url = `${baseUrl}/${endpoint}`;
                const response = await fetch(url);
                const data = await response.json();
                const newData = getData(service, data);
                setData(newData);

            } catch (error) {
                console.log(error)
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [service, userID, endpoint])
    return { data, isLoading, error }
}


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
        case "keyData":
            return `user/${userID}`;
        default:
            console.error(`${service} not found`);
    }
}

/**
 * calls special functions depending on service
 * @param {String} services endpoints
 * @param {Array.Object} data from api
 * @returns {array.Object} 
 */
const getData = (services, data) => {
    switch (services) {
        case "activity":
            return getDailyActivity(data.data);
        case "average-sessions":
            return averageSessions(data.data);
        case "performance":
            return getRadarPerformance(data.data);
        case "userInfo":
            return getUserInfo(data.data);
        default:
            console.error(`${services} not found`);
    }
}

/**
 * get user activity and transform "day" key (format: dd)
 * @param {array.Object} data from api
 * @returns {array.Object} 
 */
export const getDailyActivity = (data) => {
    if (data) {
        const sessions = data.sessions.map(item => {
            const [yyyy, mm, dd] = item.day.split("-");
            return ({ ...item, day: dd })

        })
        return activitiesModel({ ...data, sessions })
    }
}

/**
 * Tranform data change day format 
 * @param {array.Object} data from api
 * @returns {array.Object}
 */
const averageSessions = (data) => {
    console.log(data)
    if (data) {
        const sessions = data.sessions.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }));
        return sessionsModel({ ...data, sessions });
    }
}

/**
 * get data and change activity name
 * @param {array.Object} data from api
 * @returns {Object}
 */
const getRadarPerformance = (data) => {
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data.data) {
            if (item.kind.toString() === kind) {
                item.kind = activityTitleFR[kind]
            }
        }
    }
    return performanceModel(data);
}
/**
 * get user information
 * @param {array.Object} data from api
 * @returns {array.Object}
 */
const getUserInfo = (data) => {
    return userModel(data);
}
