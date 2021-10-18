const catchAsync = require('../../utils/catchAsync')
const CategoryModel = require('../../models/CategoryModel/categoryModel')

exports.createCategory = catchAsync(async (req, res, next) => {
    const area = await CategoryModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallCategory = catchAsync(async (req, res, next) => {
    const area = await CategoryModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsingleCategory = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await CategoryModel.findOne({_id:id})
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

exports.updateCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await CategoryModel.updateOne({ _id: id },req.body , {new: true})
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

exports.deleteCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await CategoryModel.deleteOne({ _id: id })
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