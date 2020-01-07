var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });

var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "helloiit",
  database: "endgem"
});

var course1;
var course2;
var course3;
var course4;
con.connect(function(err) {
	  if (err) throw err;
	  });
function select()
{
	
	  con.query("SELECT * FROM course1", function (err, result, fields) {
	    if (err) throw err;
	    course1 = (result);
	  });
	  con.query("SELECT * FROM course2", function (err, result, fields) {
	    if (err) throw err;
	    course2 = (result);
	  });
	  con.query("SELECT * FROM course3", function (err, result, fields) {
	    if (err) throw err;
	    course3 = (result);
	  });
	  con.query("SELECT * FROM course4", function (err, result, fields) {
	    if (err) throw err;
	    course4 = (result);
	  });
	
}

select();
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("home.ejs",{course1:course1 , course2:course2 , course3:course3 , course4:course4});
});

app.get("/add",function(req,res){
	res.render("add.ejs");
});

app.post("/add",upload.single('avatar'),function(req,res){
	var CourseName = req.body.Cname;
	var DisplayName  = req.body.DispName;
	var location = req.file.filename;
	var newMaterial = {DisplayName : DisplayName,TotalDownloads : 0,location:location };
	if(CourseName == "Course 1")
	{
		course1.push(newMaterial);

		  var sql = "INSERT INTO course1 VALUES (\"" + newMaterial.DisplayName + "\","+newMaterial.TotalDownloads+",\""+newMaterial.location+"\")";
		  con.query(sql, function (err, result) {
		    if (err) throw err;
		    console.log("1 record inserted");
		  });
	}
	if(CourseName == "Course 2")
	{
		course2.push(newMaterial);

		var sql = "INSERT INTO course2 VALUES (\"" + newMaterial.DisplayName + "\","+newMaterial.TotalDownloads+",\""+newMaterial.location+"\")";
		  con.query(sql, function (err, result) {
		    if (err) throw err;
		    console.log("1 record inserted");
		  });
	}
	if(CourseName == "Course 3")
	{
		course3.push(newMaterial);
		var sql = "INSERT INTO course3 VALUES (\"" + newMaterial.DisplayName + "\","+newMaterial.TotalDownloads+",\""+newMaterial.location+"\")";
		  con.query(sql, function (err, result) {
		    if (err) throw err;
		    console.log("1 record inserted");
		  });
	}
	if(CourseName == "Course 4")
	{
		course4.push(newMaterial);
		var sql = "INSERT INTO course4 VALUES (\"" + newMaterial.DisplayName + "\","+newMaterial.TotalDownloads+",\""+newMaterial.location+"\")";
		  con.query(sql, function (err, result) {
		    if (err) throw err;
		    console.log("1 record inserted");
		  });
	}
	res.redirect("/");
});

app.post("/",function(req,res){
	var name =(req.body.name);
	var course = (req.body.course);
	  var sql = "UPDATE "+ course +" SET TotalDownloads = TotalDownloads+1 WHERE DisplayName = '"+name+"'";
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log(result.affectedRows + " record(s) updated");
	  });
	  select();
})
app.listen(3000, function() { 
  console.log('Server has started!'); 
});