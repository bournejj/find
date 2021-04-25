// const findFunc = function (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i), arr === true)
//             return [i]


//     }
//     return -1;
// }

const findUserByUsername = function (users, username,) {
    return arr.find(function (user) {
        return user.username === username;

    })

}
function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function (user) {
        return user.username === username;
    })
    if (foundIndex === -1) return;

    return usersArray.splice(foundIndex, 1)[0];
}

