const transectionModel = require('../models/transectionModel')
const moment = require('moment')



const getAllTransection = async (req, res) => {
    try {
        const { frequency, selectedDate, userid ,type } = req.body;

        const transactions = await transectionModel.find({
            ...(frequency !== 'custom' ? {
                date: {
                    $gt: moment().subtract(Number(frequency), 'd').toDate()
                },
            } : {
                date: {
                    $gte: selectedDate[0],
                    $lte: selectedDate[1]
                }
            }),
            userid,
            ...(type !=='all' && { type })
        });

        res.status(200).json(transactions);

    } catch (error) {
        console.log('Error in getAllTransection:', error);
        res.status(500).json(error);
    }
};


const addTransection = async (req, res) => {

    try {
        const newTransection = new transectionModel(req.body);

        await newTransection.save();
        res.status(201).send('transection is created !');


    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

    
}

const editTransection = async (req,res)=>{
    try {
        await transectionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        res.status(200).send('edit successful !')
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
const deleteTransection =async(req,res)=>{
    try {
        await transectionModel.findOneAndDelete({_id:req.body.transactionId})
        res.status(200).send('deleted successful !')
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}




module.exports = { getAllTransection, addTransection, editTransection ,deleteTransection}