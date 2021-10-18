const catchAsync = require('../../utils/catchAsync')
const ShopModel = require('../../models/ShopModel/shopModel')

exports.createShop = catchAsync(async (req, res, next) => {
    const area = await ShopModel.create(req.body);
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getallShop = catchAsync(async (req, res, next) => {
    const area = await ShopModel.find()
    res.status(200).json({
        status: 'success',
        area
    })
})

exports.getsingleShop = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlearea = await ShopModel.findOne({_id:id})
    if(!singlearea){
        res.status(200).json({
            status: 'success',
            message: 'Shop not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlearea
    })
})

exports.updateShop = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglearea = await ShopModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'Shop not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglearea
    })
})

exports.deleteShop = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglearea = await ShopModel.deleteOne({ _id: id })
    if (!deletesinglearea) {
        res.status(200).json({
            status: 'success',
            message: 'Shop not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'Shop Deleted'
    })
})