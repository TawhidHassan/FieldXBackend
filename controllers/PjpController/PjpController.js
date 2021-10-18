const catchAsync = require('../../utils/catchAsync')
const PjpModel = require('../../models/PjpModel/pjpModel')

exports.createPjp = catchAsync(async (req, res, next) => {
    const area = await PjpModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallPjp = catchAsync(async (req, res, next) => {
    const area = await PjpModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsinglePjp = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await PjpModel.findOne({_id:id})
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

exports.updatePjp = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await PjpModel.updateOne({ _id: id },req.body , {new: true})
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

exports.deletePjp = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await PjpModel.deleteOne({ _id: id })
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