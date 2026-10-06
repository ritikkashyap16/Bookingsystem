const {StatusCodes} = require('http-status-codes')


const info =  (req,res) => {
    return  res(StatusCodes.OK).json({
        success : true,
        message : "API is live",
        error : {},
        data : {}
    })
}

module.exports = {info}