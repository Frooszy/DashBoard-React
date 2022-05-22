import verification from '../../middleware/verification';

export default function handler(req, res) {

    const user = verification(req)

    if (user) {

        res.status(200).json({ Username: user.username, Email: user.email, UserPriority: user.userpriority })

    } else {
        res.status(401).json({ Resultado: 'Invalid Token' })
    }

}