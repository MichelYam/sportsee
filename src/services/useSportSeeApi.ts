import { array } from "prop-types";
import { useEffect, useState } from "react";
import { userModel } from "./models/index";

const baseUrl = "http://localhost:3030";

const activityTitleFR = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
};
// const activityTitleFR : ActivityTitleFR = {
//     1: "Cardio",
//     2: "Energie",
//     3: "Endurance",
//     4: "Force",
//     5: "Vitesse",
//     6: "Intensité",
// };
// interface ActivityTitleFR {
//     name: string;
//   }


/**
 * 
 * @param service 
 * @param userID 
 * @returns 
 */
export const useSportSeeAPi = (service: string, userID: string) => {
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
const getData = (service, data) => {
    switch (service) {
        case "activity":
            return getDailyActivity(data.data.sessions);
        case "average-sessions":
            return averageSessions(data.data.sessions);
        case "performance":
            return getRadarPerformance(data.data.data);
        case "userInfo":
            return getUserInfo(data);
        case "keyData":
            return getUserkeyData(data);
        default:
            console.error(`${service} not found`);
    }
}



/**
 * get user activity and transform "day" key (format: dd)
 * @param {array.Object} data from api
 * @returns {array.Object} 
 */
// const getDailyActivity = (data) => {
//     if (data) {
//         const dailyActivity = [];

//         for (let item of data.sessions) {

//             const [yyyy, mm, dd] = item.day.split("-");

//             dailyActivity.push({
//                 day: `${dd}`,
//                 kilogram: item.kilogram,
//                 calories: item.calories,
//             });
//         }
//         return dailyActivity;
//     }
// }

interface Activity {
    day: string,
    kilogram: number,
    calories: number,
}

const getDailyActivity = (activity: Activity) => {
    if (activity) {
        const dailyActivity: object[] = [];

        for (let item of Object.assign(activity)) {

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


/**
 * Tranform data change day format 
 * @param {array.Object} data from api
 * @returns {array.Object}
 */
const averageSessions = (data) => {
    const newData = data.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }))
    return newData
}

/**
 * get data and change activity name
 * @param {array.Object} data from api
 * @returns {array.Object}
 */
const getRadarPerformance = (data) => {
    const newArr = [];
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data) {
            if (item.kind.toString() === kind) {
                newArr.push({
                    kind: activityTitleFR[kind],
                    value: item.value
                })
            }
        }
    }

    return [...newArr].reverse();
}

/**
 * get user information
 * @param {array.Object} data from api
 * @returns {array.Object}
 */
const getUserInfo = (data) => {
    return userModel(data.data.userInfos)
}
const getUserkeyData = (data) => {
    return data.data.keyData;
}
/**
 *  initialize activity data if API not found
 * @returns {array.Object} default data for activities chart
 */
export const getDefaultActivities = () => {
    const activities = [];

    for (let key in activityTitleFR) {
        activities.push({
            activity: activityTitleFR[key],
            value: 0,
        });
    }

    return activities;
};