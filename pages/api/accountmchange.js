import verification from '../../middleware/verification';
import Accounts from '../../data/accounts.json'
import fs from 'fs'

export default function handler(req, res) {

    const user = verification(req)

    if (user) {

        const Username = req.body.username
        const Priority = req.body.userpriority
        const userEmail = req.body.email
        const IndexUsername = req.body.indexusername

        console.log(IndexUsername)

        const objIndex = Accounts.findIndex((obj => obj.email == userEmail));

        if (Username === "") {

            if (Priority === "") {
                res.status(401).json({ Resultado: "Você deve modificar algo para que isso seja aceito." })
            } else {
                Accounts[objIndex].userpriority = Priority

                const Final = JSON.stringify(Accounts)
                fs.writeFileSync('data/accounts.json', Final)
                res.status(200).json({ Resultado: 'Cargo do usuário modificado com sucesso.' })
            }

        } else {

            const UsernameV = Accounts.filter(account => account.username == Username)

            if (UsernameV.length > 0) {

                if (UsernameV[0].username === IndexUsername) {

                    if (Priority === "") {
                        Accounts[objIndex].username = Username

                        const Final = JSON.stringify(Accounts)
                        fs.writeFileSync('data/accounts.json', Final)
                        res.status(200).json({ Resultado: 'Nome do usuário modificado com sucesso.' })
                    } else {
                        Accounts[objIndex].username = Username
                        Accounts[objIndex].userpriority = Priority

                        const Final = JSON.stringify(Accounts)

                        fs.writeFileSync('data/accounts.json', Final)

                        res.status(200).json({ Resultado: 'Nome/Cargo do usuário modificados com sucesso.' })
                    }

                } else {
                    res.status(401).json({ Resultado: "Nome de usuário já ultilizado." })
                }

            } else {
                if (Priority === "") {
                    Accounts[objIndex].username = Username

                    const Final = JSON.stringify(Accounts)
                    fs.writeFileSync('data/accounts.json', Final)
                    res.status(200).json({ Resultado: 'Nome do usuário modificado com sucesso.' })
                } else {
                    Accounts[objIndex].username = Username
                    Accounts[objIndex].userpriority = Priority

                    const Final = JSON.stringify(Accounts)

                    fs.writeFileSync('data/accounts.json', Final)

                    res.status(200).json({ Resultado: 'Nome/Cargo do usuário modificados com sucesso.' })
                }
            }

        }

    } else {
        res.status(401).json({ Resultado: 'Sua conta não tem permissões para modificar isso.' })
    }

}