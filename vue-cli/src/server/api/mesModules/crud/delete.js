
const mysql = require('mysql');


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


db.query("DELETE FROM boisson WHERE id = 1",function (err, res){

		if(err) {

			console.log("Voici l'erreur " , err);

		}else{
			
		 	console.log( res.affectedRows + "c'est modifié bb");
		
		}
	})
})