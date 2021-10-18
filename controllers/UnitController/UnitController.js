const catchAsync = require('../../utils/catchAsync')
const UnitModel = require('../../models/UnitModel/unitModel')

exports.createUnit = catchAsync(async (req, res, next) => {
    const area = await UnitModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallUnit = catchAsync(async (req, res, next) => {
    const area = await UnitModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsingleUnit = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await UnitModel.findOne({_id:id})
    if(!singlearea){
        res.status(200).json({
            status: 'success',
            message: 'brand not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlearea
    })
})

exports.updateUnit = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await UnitModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'area not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglearea
    })
})

exports.deleteUnit = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await UnitModel.deleteOne({ _id: id })
    if (!deletesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'area not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'Area Deleted'
    })
})