const userModel = require('../models/userModel');



//login callback
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (!user) {
            res.status(404).send('User Not Found');
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
}

//register callback
const registerController = async (req, res) => {
    try {
        const newuser = new userModel(req.body);
        await newuser.save()
        res.status(201).json({
            success: true,
            newuser,

        })

    } catch (error) {
        res.status(200).json({
            success: false,
            error,
        });
    }
}


module.exports = { loginController, registerController };