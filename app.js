const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/UserRoute/userRoutes');
const areatRouter = require('./routes/GeoRoute/areaRoute')
const teritoryRouter = require('./routes/GeoRoute/teritoryRoute')
const regionRouter = require('./routes/GeoRoute/regionRoute')
const geoRouter = require('./routes/GeoRoute/geoRoute')
const brandRouter = require('./routes/BrandRoute/brandRoute')
const categoryRouter = require('./routes/CategoryRoute/categoryRoute')
const unitRouter = require('./routes/UnitRoute/UnitRoute')
const routeRouter = require('./routes/RouteRoute/routeRouter')
const officeRouter = require('./routes/OfficeRoute/officeRoute')
const targetRouter = require('./routes/TargetRoute/TargetRoute')
const shopRouter = require('./routes/ShopRoute/ShopRoute')
const pjpRouter = require('./routes/PjpRoute/PjpRoute')

const app = express();

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API


// Body parser, reading data from body into req.body
app.use(express.json({ limit: '50MB' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsQuantity',
//       'ratingsAverage',
//       'maxGroupSize',
//       'difficulty',
//       'price'
//     ]
//   })
// );

// Serving static files
// app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// 3) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/area', areatRouter );
app.use('/api/v1/teritory', teritoryRouter)
app.use('/api/v1/region', regionRouter)
app.use('/api/v1/geo', geoRouter)
app.use('/api/v1/brand', brandRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/unit', unitRouter)
app.use('/api/v1/target', targetRouter)
app.use('/api/v1/route', routeRouter)
app.use('/api/v1/office', officeRouter)
app.use('/api/v1/shop', shopRouter)
app.use('/api/v1/pjp', pjpRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
