const bcrypt = require('bcrypt')
const database = require('../../database/connection')

module.exports = {
    
    async Create( req , res){
        
        try {
            const {email, password} = req.body 
            
            const hash = bcrypt.hashSync( password , 10 )

            const user_exists = await database.select().where({email: email}).from('Users').first()
            
            if (user_exists) { return res.status(200).json({ message: "there is already a registered user with this email" })}
            
            const user_id = await database.table('Users').insert({email: email, password: hash}).timeout(1000)

            res.status(200).json({data:{user_id: user_id, email: email, password: hash}})
        
        } catch (error) {

            res.status(500).json({Error: "Error internal"})
       
        }
            
        
        
    },

    Delete(response, request){

    }

}
