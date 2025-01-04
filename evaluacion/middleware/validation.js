
const logMessage    =   (req,res,next) => {
    const regex    =   /\d/gi;
    const surname   =   req.params.id;

    if (regex.test(surname) === true) 
        res.status(400).send('400 Bad Request Error: El surname no puede contener dígitos.')
    next();
    }

module.exports  =   logMessage;