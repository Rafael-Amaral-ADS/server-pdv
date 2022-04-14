const User = require('../../models/User');

const SessionController = {
    async createSession(req, res) {
        const { username } = req.body

        try {
            if(!await User.findOne({ username })) return res.status(400).send({error: 'Unregistered user!'})

            const user = await User.findOne({ username })
            return res.status(200).json(user)
        } catch(err) {
            return res.status(400).json(err)
        }
    }
};

module.exports = SessionController;