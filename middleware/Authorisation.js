const jwt = require('jsonwebtoken')

const userAuth = (req,res,next)=>{
    try {
        const authHeader = req.headers['authorization']
        const token =authHeader && authHeader.split(' ')[1]
        if(token == null) return res.sendStatus(401)

        jwt.verify(token,"clickpost",(err,decodedToken)=>{   
            if(err) return res.sendStatus(403)
            if(decodedToken){
                req.userid=decodedToken.userId
                next()
            }else{
                res.status(401).json({message:'unauthorized user'})
            }
    
        })
        
    } catch (error) {
        
    }
   
}
function checkPitcherOwnership(req, res, next) {
    const { userId } = req.user; // Assuming userId is stored in JWT payload
    const pitcherId = req.params.pitcherId; // Assuming pitcherId is passed in URL params
  
    Pitcher.findById(pitcherId, (err, pitcher) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      if (!pitcher) {
        return res.status(404).send('Pitcher not found');
      }
      if (pitcher.user.toString() !== userId) {
        return res.status(403).send('Unauthorized');
      }
      req.pitcher = pitcher;
      next();
    });
  }
  

module.exports={userAuth,checkPitcherOwnership}