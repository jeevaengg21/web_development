const userid = 12345
const age = 30

const isAdult = () => {
    return age > 18
}

/** unexported variable or functions should be considered private */
const isHealthy = () => {
    return true;
}

/** named export */
export { userid, age, isAdult }


const getPersonId = () => {
    return userid;
}

/** default export */
export default getPersonId;


/**
 * 
 * {
 *  userid: userid_reference,
 *  age: age_reference,
 *  isAdult: isAdult_reference
 * }
 */