const bcrypt = require('bcrypt')
const database = require('../../database/db')

module.exports = {
    
    async Create( Request , Response){
        
        try {
            const {email, password} = Request.body 
            
            const hash = bcrypt.hashSync( password , 10 )

            const user_exists = await database.select().where({email: email}).from('Users').first().timeout(1000)
            
            if (user_exists) { return Response.status(200).json({ message: "there is already a registered user with this email" })}
            
            const [id] = await database.table('Users').insert({email: email, password: hash}).timeout(1000)

            return Response.status(200).json({data:{user_id: id, email: email, password: hash}})
        
        } catch (error) {

            return Response.status(500).json({Error: "Error internal"})
       
        }
            
    }

}
