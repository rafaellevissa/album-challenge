const database = require('../../database/connection')

module.exports = {
    
    async Create(Request, Response) {
      
        try {
            
            const {title, description, user_id} = Request.body
            
            await database.table('Albums').insert({title: title, description: description , user_id: user_id}).timeout(1000)

            return Response.status(200).json({data: {title: title, description: description}})
            
        } catch (error) {

            return Response.status(500).json({error: "Error internal"})
        }
    },

    async FindAll(Request, Response) {
        
        try {

            const {user_id} = Request.params  

            const albums = await database.select().where({user_id: user_id}).from('Albums').timeout(1000)
            
            return Response.status(200).json({data: albums})

        } catch (error) {

            return Response.status(500).json({error: "Error internal"})
        }
    },

    async FindById(Request, Response) {
        
        try {
            
        const {id} = Request.params        

        const album = await database.select().where({id: id}).from('albums').timeout(1000)

        return Response.status(200).json({data: album})


        } catch (error) {

            return Response.status(500).json({error: "Error internal"})

        }

    },

    async Update(Request, Response) {

        try {

            const data = {title, description} = Request.body

            const {id} = Request.params

            await database.table('Albums').where({id: id}).update(data)

            return Response.status(200).json({data})
        
        } catch (error) {
            
            return Response.status(500).json({error: "Error internal"})
            
        }
    },

    async Delete(Request, Response) {
            
        try {

            const {id} = Request.params

            await database.table('Albums').where({id: id}).delete()

            return Response.status(200).json({message: 'Success'})
        
        } catch (error) {
            
            return Response.status(500).json({Error: 'Error internal'})

        }
    },
    

}
