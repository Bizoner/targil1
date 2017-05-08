/**
 * Created by gadyezra on 5/8/17.
 */

/**
 * @api {get} /getAllUsers Get All Users
 * @apiName Get All Users
 * @apiGroup Users
 *
 * @apiSuccess {Number} code Response Code (200 OK)
 * @apiSuccess {Object[]} data Array of User Objects
 * @apiSuccess {ObjectId} data._id Id of the Object
 * @apiSuccess {String} data.firstName Firstname of the User.
 * @apiSuccess {String} data.lastName Lastname of the User.
 * @apiSuccess {String} data.address Home Address of the User.
 * @apiSuccess {String} data.email Email of the User.
 * @apiSuccess {Date} data.cDate Date of Creation
 * @apiSuccess {Number} data.totalMonthly Monthly Price on Subscription
 * @apiSuccess {Object[]} data.channels Array of Channels Registered at User
 * @apiSuccess {String} data.channels.name Name of the channel
 * @apiSuccess {Number} data.channels.price Price of the channel.
 * @apiSuccess {Number} data.channels.channelNumber Number of the channel.
 */

/**
 * @api {post} /addNewUser Set New User
 * @apiName Set New User
 * @apiGroup Users
 *
 * @apiParam {String} firstName Firstname of the User.
 * @apiParam {String} lastName Lastname of the User.
 * @apiParam {String} address Home Address of the User.
 * @apiParam {String} email Email of the User.
 * @apiParam {Object[]} channels Array of Channels Registered at User
 * @apiParam {String} channels.name Name of the channel
 * @apiParam {Number} channels.price Price of the channel.
 * @apiParam {Number} channels.channelNumber Number of the channel.
 *
 * @apiExample {json} Example Request:
 *  {
  "firstName":"Gady",
  "lastName": "Ezra",
  "address": "Sample Address",
  "email": "check@email.com",
  "channels": [{
    "name": "Channel 2",
    "price": 20,
    "channelNumber": 22
  },
    {
      "name": "Channel 1",
      "price": 10,
      "channelNumber": 11
    },
    {
      "name": "Channel 5",
      "price": 5,
      "channelNumber": 55
    }]
}
 * @apiSuccess {Number} code Response Code (200 OK)
 * @apiSuccess {Object} data Single User Object
 * @apiSuccess {ObjectId} data._id Id of the Object
 * @apiSuccess {String} data.firstName Firstname of the User.
 * @apiSuccess {String} data.lastName Lastname of the User.
 * @apiSuccess {String} data.address Home Address of the User.
 * @apiSuccess {String} data.email Email of the User.
 * @apiSuccess {Date} data.cDate Date of Creation
 * @apiSuccess {Number} data.totalMonthly Monthly Price on Subscription
 * @apiSuccess {Object[]} data.channels Array of Channels Registered at User
 * @apiSuccess {String} data.channels.name Name of the channel
 * @apiSuccess {Number} data.channels.price Price of the channel.
 * @apiSuccess {Number} data.channels.channelNumber Number of the channel.
 */

/**
 * @api {get} /getUserChannels/:id Get User Channels
 * @apiName Get User Channels by ID
 * @apiGroup Users
 *
 * @apiParam {ObjectId} id ID String of the user (in Route)
 *
 * @apiExample {json} Example Route
 *  http://localhost:3000/getUserChannels/590f7a33347ace5aa1090644
 * @apiExample {json} Example Response
 *
 {
  "code": 200,
  "data": [
    {
      "_id": "590f7a33347ace5aa1090644",
      "channels": [
        {
          "name": "Channel 2",
          "price": 20,
          "channelNumber": 22,
          "_id": "590f7a33347ace5aa1090647"
        },
        {
          "name": "Channel 1",
          "price": 10,
          "channelNumber": 11,
          "_id": "590f7a33347ace5aa1090646"
        },
        {
          "name": "Channel 5",
          "price": 5,
          "channelNumber": 55,
          "_id": "590f7a33347ace5aa1090645"
        }
      ]
    }
  ]
 }
 * @apiSuccess {Number} code Response Code (200 OK)
 * @apiSuccess {Object} data Array of Channels
 * @apiSuccess {Object[]} data.channels Array of Channels Registered at User
 * @apiSuccess {String} data.channels.name Name of the channel
 * @apiSuccess {Number} data.channels.price Price of the channel.
 * @apiSuccess {Number} data.channels.channelNumber Number of the channel.
 */

/**
 * @api {post} /isRegToChannel/:id Channel Check
 * @apiName Check if user subscribed to channel
 * @apiGroup Users
 *
 * @apiParam {ObjectId} id (IN ROUTE) ID String of the user
 * @apiParam {Number} channelNumber (IN BODY) Number of the channel
 *
 * @apiSuccess {Number} code Response Code (200 OK)
 * @apiSuccess {bool} data TRUE if subscribed / FALSE if not subscribed
 */

/**
 * @api {get} /getAllChannels Get Channels
 * @apiName Receive all channels Exist
 * @apiGroup Channels
 *
 * @apiSuccess {Number} code Response Code (200 OK)
 * @apiSuccess {Object[]} data Array of Channel Objects
 * @apiSuccess {ObjectId} data.id Id of the Object
 * @apiSuccess {String} data.name Name of the channel
 * @apiSuccess {Number} data.channelNumber Number of the channel
 * @apiSuccess {String} data.description Small Description of the channel
 * @apiSuccess {Number} data.pricePerMonth Monthly Cost of the Channel
 * @apiSuccess {String} data.officeAddress Address of Channel Offices
 * @apiSuccess {String[]} data.topShows Array of Top Shows Names in Channel
 * @apiSuccess {Number} data.packageNum Package/Category Index Number
 * @apiSuccess {Date} data.cDate Date when first added to Catalog
 */

/**
 * @api {post} /addNewChannel Add New Channel
 * @apiName Set a New Channel in Catalog
 * @apiGroup Channels
 *
 * @apiParam {String} name Name of the channel
 * @apiParam {Number} channelNumber Number of the channel
 * @apiParam {String} description Small Description of the channel
 * @apiParam {Number} pricePerMonth Monthly Cost of the Channel
 * @apiParam {String} officeAddress Address of Channel Offices
 * @apiParam {String[]} topShows Array of Top Shows Names in Channel
 * @apiParam {Number} packageNum Package/Category Index Number
 *
 * @apiExample {json} Example Request
 {
   "name": "Channel 10",
    "channelNumber": 10,
    "description": "The 2nd Most Popular Channel In Israel",
    "pricePerMonth": 10,
    "officeAddress": "Yehuda Halavi 20, Tel Aviv",
    "activityHours": "24/7",
    "topShows": ["Survival","Hamakor"],
    "packageNum": 0
  }
 *
 * @apiSuccess {Number} code Response Code (200 OK)
 * @apiSuccess {Object} data Single Channel Object
 * @apiSuccess {ObjectId} data._id Id of the Object
 * @apiSuccess {String} data.name Name of the channel
 * @apiSuccess {Number} data.channelNumber Number of the channel
 * @apiSuccess {String} data.description Small Description of the channel
 * @apiSuccess {Number} data.pricePerMonth Monthly Cost of the Channel
 * @apiSuccess {String} data.officeAddress Address of Channel Offices
 * @apiSuccess {String[]} data.topShows Array of Top Shows Names in Channel
 * @apiSuccess {Number} data.packageNum Package/Category Index Number
 * @apiSuccess {Date} data.cDate Date when first added to Catalog
 */


