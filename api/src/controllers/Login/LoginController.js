const database = require('../../database/db')
const bcrypt = require('bcrypt');

module.exports = {

    async Sing_in(Request, Response) {

        const { email, password } = Request.body

        const user = await database.select().where({ email: email }).from('Users').first().timeout(1000)

        if (!user) {

            return Response.status(400).json({ message: "email or password are invalid" })

        } else {

            const match = await bcrypt.compare(password, user.password)

            if (!match) {

                return Response.status(400).json({ message: "email or password are invalid" })
            
            }else {

                return Response.status(200).json({ data: user })

            }

        }
    },

}
