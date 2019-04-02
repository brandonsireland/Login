// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ExampleSchema = new Schema({
//    title: {
//       type: String,
//       required: true
//    },
//    description: String,
//    url: {
//       type: String,
//       required: true
//    },
//    alt: {
//       type: Schema.Types.ObjectId,
//       ref: 'AffiliateModel'
//    },
//    resolutions: [{
//       type: Schema.Types.ObjectId,
//       ref: 'ResolutionModel'
//    }],
//    sprite: [{
//       type: Schema.Types.ObjectId,
//       ref: 'ResolutionModel'
//    }],
//    tags: [{
//       type: Schema.Types.ObjectId,
//       ref: 'TagModel'
//    }],
//    gif: {
//       type: Schema.Types.ObjectId,
//       ref: 'GifModel'
//    },
//    images: [{
//       type: Schema.Types.ObjectId,
//       ref: 'ImageModel'
//    }],
//    featuredImage: String,
//    categories: [{
//       type: Schema.Types.ObjectId,
//       ref: 'CategoryModel'
//    }],
//    pornstars: [{
//       type: Schema.Types.ObjectId,
//       ref: 'PornStarModel'
//    }],
//    channels: [{
//       type: Schema.Types.ObjectId,
//       ref: 'ChannelModel'
//    }],
//    channels: [{
//       type: Schema.Types.ObjectId,
//       ref: 'ChannelModel'
//    }]
// }, {
//    timestamps: true
// });

// module.exports = mongoose.model('VideoModel', VideoSchema);