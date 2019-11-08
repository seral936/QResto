
const mysql = require('mysql');


console.log( "le console.log de __dirname : " + __dirname);


const db = mysql.createConnection({
	host: 'localhost',
	database:'QResto',
	user: 'root',
	password: 'root',
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
	
})
db.connect(function(err){
	if(err) {

		console.log(err);
	}else{
         console.log("apparement ya pas d'erreur pour le moment bb");

	}


db.query('INSERT INTO boisson (nom, prix) VALUES("coca", "1")',(err, res)=>{

	if(err) {
			console.log(err);
		}else{
			console.log( res.affectedRows + "c'est creé bb");

		}
	
	
	
})

	
	
})