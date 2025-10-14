const loggerMiddleware = (req,res,next)=>{
    console.log("Logger middleware called");
    console.log(req.url);
    next();
}

module.exports = loggerMiddleware;