const catchAsync = require('../../utils/catchAsync')
const ProductModel = require('../../models/BrandModel/brandModel')

exports.createProduct = catchAsync(async (req, res, next) => {
    const area = await ProductModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallProduct = catchAsync(async (req, res, next) => {
    const area = await ProductModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsingleProduct = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await ProductModel.findOne({_id:id})
    if(!singlearea){
        res.status(200).json({
            status: 'success',
            message: 'product not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlearea
    })
})

exports.updateProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await ProductModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'product not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglearea
    })
})

exports.deleteProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await ProductModel.deleteOne({ _id: id })
    if (!deletesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'product not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'product Deleted'
    })
})