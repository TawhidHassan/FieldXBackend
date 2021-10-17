const catchAsync = require('../../utils/catchAsync')
const RouteModel = require('../../models/RouteModel/routeModel')
const GeoModel = require('../../models/GeoModel/geoModel')
exports.createroute = catchAsync(async (req, res, next) => {
    const route = await RouteModel.create({
        name: req.body.name,
        routeCode: req.body.routeCode,
        geo: req.body.geo,
        users: req.body.users,
        shops: req.body.shops,
        availableDay: req.body.availableDay,
    });
    
    const georoutes = await GeoModel.findOneAndUpdate({ _id: req.body.geo}, {
        $push: {
            routes: route._id
        },
       
    }, {
        new: true,
    })
    
    res.status(200).json({
        status: 'success',
        route
    })
})

exports.getallroute = catchAsync(async (req, res, next) => {
    const route = await RouteModel.find()
    res.status(200).json({
        status: 'success',
        route
    })
})

exports.getsingleroute = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const singleroute = await RouteModel.findOne({ _id: id })
    if (!singleroute) {
        res.status(200).json({
            status: 'success',
            message: 'route not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singleroute
    })
})

exports.updateroute = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesingleroute = await RouteModel.updateOne({ _id: id }, req.body, { new: true })
    if (!updatesingleroute) {
        res.status(200).json({
            status: 'success',
            message: 'route not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesingleroute
    })
})

exports.deleteroute = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesingleroute = await RouteModel.deleteOne({ _id: id })
    if (!deletesingleroute) {
        res.status(200).json({
            status: 'success',
            message: 'route not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'route Deleted'
    })
})