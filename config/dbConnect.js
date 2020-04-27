var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quang', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('ket noi database thanh cong')
});

var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: String,
    password: String,
    age: Number
})

var UserModel = mongoose.model('user',UserSchema)
// đa phần trả về dưới dạng Promise
// UserModel.create({
//     username:'nodemy',
//     password: '2',
//     age: 2020
// })
// .then(function(data){
//     console.log(data)
// })

//in bản ghi trong document
// UserModel.find().then(function(data){
//     // console.log(data)
//     console.log(data[0].age)
// })

//in bản ghi theo điều kiện
// UserModel.find({
//     username: 'nodemy'
// }).then(function(data){
//     console.log(data)
// })

//cập nhật dữ liệu bản ghi
// UserModel.updateMany({
//     //điều kiện, bản ghi nào sẽ được cập nhật
//     //không bao giờ được cập nhật giá trị _id của bản ghi
//     password: '1'
// },{
//     //giá trị các trường mình muốn cập nhật
//     username:'hoang'
// }).then(function(data){
//     console.log('cap nhat thanh cong')
// })

//xóa bản ghi
UserModel.deleteOne({
    _id:'5ea2b438ab307a24947cd064'
}).then(function(data){
    console.log('xoa thanh cong')
})