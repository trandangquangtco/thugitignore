var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quang', {NewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('ket noi database thanh cong')
});

var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    address: String
},{
    collection: 'userTable'
})

var UserModel = mongoose.model('userTable',UserSchema)
//b1
UserModel.find({
    age:{$gt:25}
}).then(function(data){
    console.log(data)
})

//b2
UserModel.find({$and:[{
    age:{$gte:20}  
},{
    age:{$lte:30}
}]}).then(function(data){
    console.log(data)
})

//b3
UserModel.create({
    username: 'quang',
    password: '2222',
    age: 26,
    address: 'HN'
})

//b4
UserModel.find().then(function(data){
    console.log(data)
})

//b5
UserModel.find({
    address: "HP"
}).then(function(data){
    console.log(data)
})

//b6
UserModel.find({
    $or:[{
        name:'ta'
    },{
        age:{$lt:30}
    }]
}).then(function(data){console.log(data)})

//b7
UserModel.find().sort({age:1}).then(function(data){
    console.log(data)
})

//b8
UserModel.find.sort({age:{$gt:20}}).sort({age:-1})
.then(function(data){
    console.log(data)
})

//b9
UserModel.find().limit(5).then(function(data){
    console.log(data)
})

//b10
UserModel.find().skip(5).limit(3).then(function(data){
    console.limit(data)
})

//b11
UserModel.find({$or:[{name:'thanh'},{age:{$lt:30}}]}).then(function(data){
    console.log(data)
})

//b12
UserModel.findByIdAndUpdate('5e54dfe448afde5434ca75b9',{username:'Thai ha'})
.then(function(data){console.log(data)})

//b13
UserModel.updateOne({
    _id: '5e54dfd1ae8eac34d01da3bf'
},{
    name: 'Bac Ho'
})
.then(function(data){console.log(data)})

//b14
UserModel.deleteOne({
    _id: '5e54dfd1ae8eac34d01da3bf'
}).then(function(data){
    console.log(data)
})

//b15
UserModel.updateMany({address:'HP'},{password:1234})
.then(function(data){console.log(data)})

//b16
UserModel.updateOne({address:"HP"},{age:1000})
.then(function(data){console.log(data)})

//b17
UserModel.findOne({password:1234}).then(function(data){console.log(data)})

