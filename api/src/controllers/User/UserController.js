const bcrypt = require('bcrypt')
const database = require('../../database/db')

module.exports = {
    
    async Create( Request , Response){
        
        try {
            const {name, email, password} = Request.body 
            
            const hash = bcrypt.hashSync( password , 10 )

            const user_exists = await database.select().where({email: email}).from('Users').first().timeout(1000)
            
            if (user_exists.length > 0) { 
                Response.status(500).json({ message: "there is already a registered user with this email" })
            }
            
            const [id] = await database.table('Users').insert({name: name, email: email, password: hash}).timeout(1000)

            return Response.status(200).json({data:{user_id: id,name: name, email: email, password: hash}})
        
        } catch (error) {
            console.log("")
            return Response.status(500).json({Error: "Error internal"})
       
        }
            
    }

}
