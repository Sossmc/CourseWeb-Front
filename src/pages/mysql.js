var mysql  = require('mysql');  
var connection = mysql.createConnection({
    host     : '101.132.135.132',       
    user     : 'sossmc',              
    password : 'OnceWas5@ljy.com',       
    port: '3306',                   
    database: 'newweb' 
});
var sql = 'SELECT * FROM chat where line = 1';
var hee = function(connection,sql){
    var hea=[{cid:0},{cid:0},{cid:0}];                 //初始化
    connection.query(sql,function (err, result) {
        var a=0;
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        for (var rs of result){
            hea[a].cid=(rs.cid);
            a++;
        }
        console.log(hea);       //此处[{cid:1},{cid:2},{cid:3}]
    });
    return hea;
    console.log(hea);           //此处[{cid:0},{cid:0},{cid:0}]                 
};
connection.connect();
console.log(hee(connection,sql));//
connection.end();