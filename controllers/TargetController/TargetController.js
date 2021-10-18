const catchAsync = require('../../utils/catchAsync')
const TargetModel = require('../../models/TargetModel/targetModel')

exports.createTarget = catchAsync(async (req, res, next) => {
    const area = await TargetModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallTarget = catchAsync(async (req, res, next) => {
    const area = await TargetModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsingleTarget = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await TargetModel.findOne({_id:id})
    if(!singlearea){
        res.status(200).json({
            status: 'success',
            message: 'target not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlearea
    })
})

exports.updateTarget = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await TargetModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'target not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglearea
    })
})

exports.deleteTarget = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await TargetModel.deleteOne({ _id: id })
    if (!deletesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'target not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'target Deleted'
    })
})