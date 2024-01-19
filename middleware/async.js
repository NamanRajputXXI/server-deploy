const asyncWrapper = (fn) => {
    return async (req,res,next)=>{
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

// this is a wrapper which will let us reduce the code where we used to write try catch in every block of function in controllers.  

module.exports = asyncWrapper