const asyncHandler = (requestHandler) => { // requestHandler is a function that takes req, res, next. The value returned from requestHandler is a promise which is passed to the next middleware function
 return (req, res, next) => {  // this function returns a function that takes req, res, next
    Promise.resolve(requestHandler(req,res, next)) // next is a function that passes control to the next middleware function
    .catch((err) => next(err));
  };
};

// read about nodejs api error documentation at this point 

export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (fn) => async (req, res, next) => {



//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res
//     .status(err.code || 500)
//     .json({ success: false, message: err.message });
//   }
// };
