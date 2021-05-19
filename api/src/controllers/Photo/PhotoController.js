const database = require('../../database/connection')

module.exports = {
    
    async Create(Request, Response) {

        try {
            
            const photo_data = Request.body
            
            await database.table('Photos').insert(photo_data).timeout(1000)

            return Response.status(200).json(photo_data)
            
        } catch (error) {

            return Response.status(500).json({error: "Error internal"})
        
        }
    },

    async FindAll(Request, Response) {

        try {
            
            const {album_id} = Request.params

            const photos = await database.select().where({album_id: album_id}).from('Photos').timeout(1000)

            return Response.status(200).json({data: photos})

        } catch (error) {

            return Response.status(500).json({Error: "Error internal"})

        }
    },

    async FindById(Request, Response) {

        try {

            const {id} = Request.params

            const photo = await database.select().where({id: id}).from('Photos').first().timeout(1000) 

            return Response.status(200).json({data: photo})

        } catch (error) {

            return Response.status(500).json({Error: "Error internal"})

        }

    },

    async Delete(Request, Response) {

        try {

            const {id} = Request.params

            await database.table('Photos').where({id: id}).delete().timeout(1000)

            return Response.status(200).json({message: 'Success'})
        
        } catch (error) {
            
            return Response.status(500).json({Error: 'Error internal'})
            
        }
    }

}
