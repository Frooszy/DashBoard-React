import verification from '../../middleware/verification';
import Accounts from '../../data/accounts.json'
import fs from 'fs'

export default function handler(req, res) {

    const user = verification(req)

    if (user) {

        const Username = req.body.username
        const Priority = req.body.userpriority
        const userEmail = req.body.email

        const objIndex = Accounts.findIndex((obj => obj.email == userEmail));

        Accounts[objIndex].username = Username
        Accounts[objIndex].userpriority = Priority

        const Final = JSON.stringify(Accounts)

        fs.writeFileSync('data/accounts.json', Final)

        res.status(200).json({ Resultado: 'Conta Modificada com Sucesso.' })
    } else {
        res.status(401).json({ Resultado: 'Sua conta não tem permissões para modificar isso.' })
    }

}