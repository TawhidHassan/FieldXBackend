const catchAsync = require('../../utils/catchAsync')
const GeoModel = require('../../models/GeoModel/geoModel')
const AreaModel = require('../../models/GeoModel/areaModel')
const RegionModel = require('../../models/GeoModel/regionModel')
const TeritoriModel = require('../../models/GeoModel/teritoriesModel')
exports.creategeo = catchAsync(async (req, res, next) => {

  const area= await AreaModel.findById({_id:req.body.area}).select('name -_id')
  const region= await RegionModel.findById({_id:req.body.region}).select('name -_id')
  const teritory= await TeritoriModel.findById({_id:req.body.teritori}).select('name -_id')

  console.log(area['name']+region+teritory)

    const geo = await GeoModel.create({
        name: region["name"]+" "+area['name']+" "+teritory['name'],
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