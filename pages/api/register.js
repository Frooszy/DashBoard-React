//A Json file with the accounts

import accounts from './../../data/accounts.json'
import fs from 'fs'

export default function handler(req, res) {

    const Username = req.body.username
    const Email = req.body.email
    const Password = req.body.password

    const UsernameV = accounts.filter(account => account.username == Username)
    const EmailV = accounts.filter(account => account.email == Email)

    if (Username === '') {
        res.status(401).json({ Resultado: 'Nome De Usuário Invalido.' })
    } else if (Email === '') {
        res.status(401).json({ Resultado: 'Email Inválido.' })
    } else if (UsernameV.length > 0) {
        res.status(401).json({ Resultado: "Este Nome De Usuário já está em uso." })
    } else if (EmailV.length > 0) {
        res.status(401).json({ Resultado: "Este Email já está em uso." })
    } else {

        accounts.push({ username: Username, email: Email, password: Password, userpriority: "NotAutorized" })

        const Final = JSON.stringify(accounts)

        fs.writeFileSync('data/accounts.json', Final)

        res.status(200).json({ Resultado: "Conta Registrada com sucesso!" })
    }



}