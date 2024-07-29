const User = require("../models/user.model.js")

const getUsers = async (req, res) => {
    try{
        const users = await User.find({})
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({ message : err.message })
    }
}

const getUserById = async (req, res) => {
    try{
        const userById = await User.findById(req.params.id)
        res.status(200).json(userById)
    }
    catch(err){
        res.status(500).json({ message : err.message })
    }
}

const addUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({ message : err.message })
    }
}
const updateUserById = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if(!user){
            res.status(404).json({ message : 'User Not Found' })
        }
        const updateUser = await User.findById(req.params.id)
        res.status(200).json(updateUser)
    }
    catch(err){
        res.status(500).json({ message : err.message })
    }
}
const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).json({ message : 'User Not Found' })
        }
        res.status(200).json({ message : 'User Deleted Successfully'})
    }
    catch(err){
        res.status(500).json({ message : err.message })
    }
}

module.exports = {
    getUsers, getUserById, addUser, updateUserById, deleteUser
}
