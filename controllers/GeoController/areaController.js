const catchAsync = require('../../utils/catchAsync')
const AreaModel = require('../../models/GeoModel/areaModel')

exports.createarea = catchAsync(async (req, res, next) => {
    const area = await AreaModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallarea = catchAsync(async (req, res, next) => {
    const area = await AreaModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsinglearea = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await AreaModel.findOne({_id:id})
    if(!singlearea){
        res.status(200).json({
            status: 'success',
            message: 'area not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlearea
    })
})

exports.updatearea = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await AreaModel.updateOne({ _id: id },req.body , {new: true})
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

exports.deletearea = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await AreaModel.deleteOne({ _id: id })
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