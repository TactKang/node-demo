var mysql = require('mysql');
console.log(mysql,'看见了空间');
// 创建数据库连接对象
var con = mysql.createConnection({
  host: "localhost", // 数据库服务器地址
  user: "root", // 数据库用户名
  password: "14871236a", // 数据库密码
  database: "mysql" // 数据库名称
});

con.connect(function(err) {
    console.log(err,'errOr');
  if (err) throw err;
  console.log("Connected to the MySQL server!");
    
  var sql = "INSERT INTO userinfo (userName,sex,age ) VALUES ('John Doe', '女',19)";
  con.query(sql, function (err, result) {
    console.log(result,"1 record inserted");
    if (err) throw err;
  });


});
