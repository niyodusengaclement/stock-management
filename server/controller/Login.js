export default class Login {
    static async socialLogin(req, res) {
        if(req.user) {
            // localStorage.setItem('user', req.user.displayName)
            res.redirect('http://localhost:8080/home')
            // return res.status(200).json({
            //     status: 200,
            //     message: 'You are successfully logged in',
            //     data: {
            //     username: req.user.displayName
            //     }
            // })
        }
        // return res.status(400).json({
        //     status: 400,
        //     error: 'Something went wrong',
        // })  
    }
}