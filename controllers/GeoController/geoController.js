const catchAsync = require('../../utils/catchAsync')
const GeoModel = require('../../models/GeoModel/geoModel')

exports.creategeo = catchAsync(async (req, res, next) => {
    const geo = await GeoModel.create({
        name: req.body.name,
        area: req.body.area,
        region: req.body.region,
        teritori: req.body.teritori,
        routes: []
    });
    res.status(200).json({
        status: 'success',
        geo
    })
})

exports.getallgeo = catchAsync(async (req, res, next) => {
    const geo = await GeoModel.find()
    res.status(200).json({
        status: 'success',
        geo
    })
})

exports.getsinglegeo = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const singlegeo = await GeoModel.findOne({ _id: id })
    if (!singlegeo) {
        res.status(200).json({
            status: 'success',
            message: 'geo not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlegeo
    })
})

exports.updategeo = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglegeo = await GeoModel.updateOne({ _id: id }, req.body, { new: true })
    if (!updatesinglegeo) {
        res.status(200).json({
            status: 'success',
            message: 'geo not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglegeo
    })
})

exports.deletegeo = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglegeo = await GeoModel.deleteOne({ _id: id })
    if (!deletesinglegeo) {
        res.status(200).json({
            status: 'success',
            message: 'geo not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'geo Deleted'
    })
})