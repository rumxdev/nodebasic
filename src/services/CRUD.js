const connection = require('../configs/connectDB')

const getAllUsers = async (connection) => {
    let [resuilts, fields] = await connection.query(`select * from users`, function (err, resuilts) { })
    return resuilts;
}

module.exports = {
    getAllUsers,
}