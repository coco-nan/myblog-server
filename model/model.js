const mysql = require('mysql')

let pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'root',
    database:'myblog'
})

let query = (sql,parms)=>{
    return new Promise((res,rej) => {
       
        pool.getConnection((err,conn) => {
            if(err){
                rej(err)
            }else{
                conn.query(sql,parms=[],(err,data) => {
                     if(err)rej(err)
                     else{
                         res(data)
                     }
                })
                conn.release()
            }
        })
    })

}




// query
module.exports = query;