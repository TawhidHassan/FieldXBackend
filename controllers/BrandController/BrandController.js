const catchAsync = require('../../utils/catchAsync')
const BrandModel = require('../../models/BrandModel/brandModel')

exports.createBrand = catchAsync(async (req, res, next) => {
    const area = await BrandModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallBrand = catchAsync(async (req, res, next) => {
    const area = await BrandModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsingleBrand = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await BrandModel.findOne({_id:id})
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

exports.updateBrand = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await BrandModel.updateOne({ _id: id },req.body , {new: true})
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

exports.deleteBrand = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await BrandModel.deleteOne({ _id: id })
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