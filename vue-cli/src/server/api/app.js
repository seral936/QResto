const express = require('express');
const app = express();
const axios = require('axios');
const mysql = require('mysql');
// ------------------- LES MODULES QUE JE RECUPERE-------------------
const mod = require("./mesModules/crud");
// -------------------------------------------------------------------
const cors = require("cors");


app.use(cors());
app.use(express.json());


// ------------------ MES GET ------------------

app.get('/boisson',(req,res)=>{
	mod.voirMaTable('boisson',(data)=>{
		res.send(data)
	});
})

app.get('/plat',(req,res)=>{
	mod.voirMaTable('plat',(data)=>{
		res.send(data)
	});
})

app.get('/entree',(req,res)=>{
	mod.voirMaTable('entree',(data)=>{
		res.send(data)
	});
})

app.get('/dessert',(req,res)=>{
	mod.voirMaTable('dessert',(data)=>{
		res.send(data)
	});
})

app.get('/IdTable/:id',(req,res)=>{
	mod.getIdTable((data)=>{
		res.send(data)
	});
})

app.get('/getCommandes',(req,res)=>{
	mod.getCommandes((data)=>{
		res.send(data)
	});
})

app.get('/getList',(req,res)=>{
	mod.getList((data)=>{
		res.send(data)
	});
})


// ------------------ MES POST ------------------


app.post('/post',(req,res)=>{
	mod.creerEtrBoissDess((data)=>{
		res.send(data)
	}, req.body);
})

app.post('/envoiCommandes',(req,res)=>{
	mod.envoiCommandes((data)=>{
		res.send(data)
	}, req.body);
})

app.post('/envoieListe',(req,res)=>{
	mod.envoieListe((data)=>{
		res.send(data)
	}, req.body);
})

app.post('/test',(req,res)=>{
	console.log(req.body)
	mod.test((data)=>{
		res.send(data)
	}, req.body);
})

// ------------------ MES DELETE ------------------


app.delete('/delete',(req,res)=>{

	mod.suppProduit((data)=>{
		res.send(data)
	}, req.body);
})
app.delete('/annulerCmd',(req,res)=>{

	mod.annulerCmd((data)=>{
		res.send(data)
	}, req.body);
})
app.delete('/deleteList',(req,res)=>{

	mod.deleteList((data)=>{
		res.send(data)
	}, req.body);
})


// ------------------ LE PORT D'ECOUTE------------------


app.listen(3000,function(){
	console.log("connecté sur le port 3000");
})
