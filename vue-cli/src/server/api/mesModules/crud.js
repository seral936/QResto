const mysql = require('mysql');

// CONNECTION A MA BASE DE DONNEE
const db = mysql.createConnection({
  host: 'localhost',
  database: 'QResto',
  user: 'root',
  password: 'root',
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
})
db.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connecté a la BDD");
  }
});

// -------------------------CREATE PRODUITS-------------------------
const creerEtrBoissDess = function creerEtrBoissDess(callback, data) {
  const q = "INSERT INTO ?? (`nom`, `prix`, `description`, `url_img`) VALUES (?, ?, ?, ?)"
  const res = db.query(q, [data.table, data.nom, data.prix, data.description, data.url_img], (err, res) => {
    console.log(data)
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return callback(res);
    }
  });
  console.log(res.sql)
};

// -------------------------CREATE ENVOI LA COMMANDE-------------------------

const envoiCommandes = function envoiCommandes(callback, data) {
  const q = "INSERT INTO commandes (id_table, produits, prix,date,commentaire) VALUES (?, ?, ?, ?, ?)"
  const res = db.query(q, [data.id, data.produits, data.prix, data.date, data.commentaire], (err, res) => {

    console.log(data)

    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return callback(res);
    }
  });
  console.log(res.sql)
};

// -------------------------CREATE LA LISTE DES COURSES---------------------------

const envoieListe = function envoieListe(callback, data) {
  const q = "INSERT INTO listesDesCourses (liste, date) VALUES (?, ?)"
  const res = db.query(q, [data.liste, data.date], (err, res) => {

    console.log(data)

    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return callback(res);
    }
  });
  console.log(res.sql)
};

// READ
const voirMaTable = function voirMaTable(nomDeLaTable, callback) {
  db.query(`SELECT * from ${nomDeLaTable}`, function(err, res) {
    if (err) {
      console.log("Voici l'erreur ", err);
    } else {
      return callback(res);
    }
  });
};



// ---------------------READ AFFICHE LA COMMANDE COMMANDE---------------------
const getCommandes = function getCommandes(callback, data) {
  db.query('SELECT * FROM commandes', function(err, res) {
    if (err) {
      console.log("Voici l'erreur ", err);
    } else {
      return callback(res);
    }
  });
};

// ---------------------READ AFFICHE LA LISTE DES COURSES---------------------
const getList = function getList(callback, data) {
  db.query('SELECT * FROM listesDesCourses', function(err, res) {
    if (err) {
      console.log("Voici l'erreur ", err);
    } else {
      return callback(res);
    }
  });
};

// -------------------DELETE SUPPRIME PRODUIT DE LA CARTE-------------------
const suppLigne = function suppLigne(quelleTable, sonId, clbk) {
  db.query(`DELETE FROM ${quelleTable} WHERE id = ${sonId}`, function(err, res) {
    if (err) {
      console.log("Voici l'erreur ", err);
    } else {
      console.log(res.affectedRows + "c'est modifié bb")
      return clbk(null, res)
    }
  })
};

const suppProduit = function suppProduit(callback, data) {
  console.log(data)
  const q = "DELETE FROM ?? WHERE id=?"
  const res = db.query(q, [data.table, data.id], (err, res)=>{
    console.log(data)
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return callback(res);
    }
  });
  console.log(res.sql)
};

// -------------------DELETE ANNULE LA COMMANDE-------------------
const annulerCmd = function annulerCmd(callback, data) {

  const q = "DELETE FROM `commandes` WHERE id = ? "
  const res = db.query(q, [data.id], (err, res)=>{

    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return callback(res);
    }
  });
  console.log("teeeeeeeeeeeeeest : ",res.sql)
};



// -------------------DELETE EFFACER LA LISTE DE COURSES-------------------
const deleteList = function deleteList(callback, data) {
  const q = "DELETE FROM `listesDesCourses` WHERE id = ? ";
  const res = db.query(q, [data.id], (err, res)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return callback(res);
    }
  });
  console.log("teeeeeeeeeeeeeest : ",res.sql)
};


// -------------------DELETE AFFICHE LA TABLE-------------------

const getIdTable = function getIdTable(callback) {
  db.query('SELECT * FROM tables', function(err, res) {
    if (err) {
      console.log("Voici l'erreur ", err);
    } else {
      return callback(res);

    }
  });
};


// ------------------- LES MODULES QUE J'EXPORT-------------------
module.exports = {
  creerEtrBoissDess,
  voirMaTable,
  suppLigne,
  suppProduit,
  db,
  getIdTable,
  getCommandes,
  envoiCommandes,
  envoieListe,
  getList,
  annulerCmd,deleteList
}
