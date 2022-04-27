export default function handler(req, res) {

    const useremail = req.body.email

    const userpassword = req.body.password

    const accounts = [
        {
            "email": "frooszy@admin.com",
            "password": "frooszy@admin"
        },
        {
            "email": "admin@admin.com",
            "password": "admin@admin"
        }]

    const EmailCheck = accounts.filter(account => account.email == useremail)

    const PasswordCheck = EmailCheck.filter(account => account.password == userpassword)

    const Check1 = JSON.stringify(EmailCheck)
    const Check2 = JSON.stringify(PasswordCheck)

    if (Check1 === "[]" && Check2 === "[]") {
        res.status(401).json({ resultado: 'Email And Password Invalid' })
    } else {

        if (Check1 === Check2) {
            res.status(200).json({ resultado: 'Ok' })
        } else {
            res.status(401).json({ Resultado: 'Email or Password Invalid' })
        }

    }

}