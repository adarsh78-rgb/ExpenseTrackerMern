const express=require('express');
const {addTransection, getAllTransection , editTransection, deleteTransection} = require('../controllers/transectionController');
//router obj
const router = express.Router();

//routers
//add transecion POST method
router.post('/add-transection', addTransection);

//edit transecion POST method
router.post('/edit-transection', editTransection);

//get transection
router.post('/get-transection', getAllTransection)

//delete transection
router.post('/delete-transection', deleteTransection)

module.exports = router;
