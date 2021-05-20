const bcrypt = require('bcrypt')
const database = require('../../database/connection')

module.exports = {
    
    async Create( Request , Response){
        
        try {
            const {name, email, password} = Request.body 
            
            const hash = bcrypt.hashSync( password , 10 )
            console.log(name,email,password)
            const user_exists = await database.select().where({email: email}).from('Users').first()
            
            if (user_exists) { 
            return Response.status(401).json({ message: "there is already a registered user with this email" })
            }
            
            const [id] = await database.table('Users').insert({name: name, email: email, password: hash})

            return Response.status(200).json({data:{user_id: id,name: name, email: email, password: hash}})
        
        } catch (error) {
            console.log("")
            return Response.status(500).json({Error: "Error internal"})
       
        }
            
    }

}
