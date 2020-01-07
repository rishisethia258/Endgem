var dropItems = document.querySelectorAll(".dropdown-item");
var tab = document.querySelectorAll(".tab-pane");
var dbtn = document.querySelectorAll(".btn-outline-light");
var dshow = document.querySelectorAll(".TotalDownload");

function courseName()
{
	var cn = "";
	if(document.querySelectorAll(".nav-link")[0].className == "nav-link active show")
	{
		cn="course1";
	}
	if(document.querySelectorAll(".nav-link")[1].className == "nav-link active show")
	{
		cn="course2";
	}
	if(document.querySelectorAll(".nav-link")[2].className == "nav-link active show")
	{
		cn="course3";
	}
	if(document.querySelectorAll(".nav-link")[3].className == "nav-link active show")
	{
		cn="course4";
	}
	return cn;
}

function rm()
{
	for(var i=0;i<tab.length;i++)
	{
		tab[i].classList.remove("show");
		tab[i].classList.remove("active");
	}
}

changeDropToggle();
dropItems[0].addEventListener("click", function(){
	document.querySelector(".dropdown-toggle").textContent = this.textContent;
	rm();
	tab[0].classList.add("show");
	tab[0].classList.add("active");
	changeDropToggle();
});
dropItems[1].addEventListener("click", function(){
	document.querySelector(".dropdown-toggle").textContent = this.textContent;
	rm();
	tab[1].classList.add("show");
	tab[1].classList.add("active");
	changeDropToggle();
});
dropItems[2].addEventListener("click", function(){
	document.querySelector(".dropdown-toggle").textContent = this.textContent;
	rm();
	tab[2].classList.add("show");
	tab[2].classList.add("active");
	changeDropToggle();
});
dropItems[3].addEventListener("click", function(){
	document.querySelector(".dropdown-toggle").textContent = this.textContent;
	rm();
	tab[3].classList.add("show");
	tab[3].classList.add("active");
	changeDropToggle();
});

function changeDropToggle()
{
	if(tab[0].className == "tab-pane fade show active" || tab[0].className == "tab-pane fade active show")
	{
		document.querySelector(".dropdown-toggle").textContent = dropItems[0].textContent;
		document.querySelector("#pills-c1-tab").classList.add("active");
		document.querySelector("#pills-c2-tab").classList.remove("active");
		document.querySelector("#pills-c3-tab").classList.remove("active");
		document.querySelector("#pills-c4-tab").classList.remove("active");
	}
	if(tab[1].className == "tab-pane fade show active" || tab[1].className == "tab-pane fade active show")
	{
		document.querySelector(".dropdown-toggle").textContent = dropItems[1].textContent;
		document.querySelector("#pills-c1-tab").classList.remove("active");
		document.querySelector("#pills-c2-tab").classList.add("active");
		document.querySelector("#pills-c3-tab").classList.remove("active");
		document.querySelector("#pills-c4-tab").classList.remove("active");
	}
	if(tab[2].className == "tab-pane fade show active" || tab[2].className == "tab-pane fade active show")
	{
		document.querySelector(".dropdown-toggle").textContent = dropItems[2].textContent;
		document.querySelector("#pills-c1-tab").classList.remove("active");
		document.querySelector("#pills-c2-tab").classList.remove("active");
		document.querySelector("#pills-c3-tab").classList.add("active");
		document.querySelector("#pills-c4-tab").classList.remove("active");
	}
	if(tab[3].className == "tab-pane fade show active" || tab[3].className == "tab-pane fade active show")
	{
		document.querySelector(".dropdown-toggle").textContent = dropItems[3].textContent;
		document.querySelector("#pills-c1-tab").classList.remove("active");
		document.querySelector("#pills-c2-tab").classList.remove("active");
		document.querySelector("#pills-c3-tab").classList.remove("active");
		document.querySelector("#pills-c4-tab").classList.add("active");
	}
}

document.querySelector(".tgh5").textContent = "Course 1";
var c1DispName = document.querySelectorAll(".c1DispName");
var c1TotalDownloads = document.querySelectorAll(".c1totalDownload");
leaderBoard(c1DispName,c1TotalDownloads);

for(var j=0;j<dbtn.length; j++)
{	
	dbtn[j].addEventListener("click",function()
	{	
		for(var i=0;i<dbtn.length;i++)
		{
			if(dbtn[i]===this)
			{
				break;
			}
		}
		var n = Number(dshow[i].textContent);
		n++;
		dshow[i].textContent=n;

		var c = document.querySelectorAll(".card-title")[i].textContent;
		increment(c);

		if(tab[0].className == "tab-pane fade show active" || tab[0].className == "tab-pane fade active show")
		{
			document.querySelector(".tgh5").textContent = "Course 1";
			var c1DispName = document.querySelectorAll(".c1DispName");
			var c1TotalDownloads = document.querySelectorAll(".c1totalDownload");
			leaderBoard(c1DispName,c1TotalDownloads);
		}
		if(tab[1].className == "tab-pane fade show active" || tab[1].className == "tab-pane fade active show")
		{
			document.querySelector(".tgh5").textContent = "Course 2";
			var c2DispName = document.querySelectorAll(".c2DispName");
			var c2TotalDownloads = document.querySelectorAll(".c2totalDownload");
			leaderBoard(c2DispName,c2TotalDownloads);
		}
		if(tab[2].className == "tab-pane fade show active" || tab[2].className == "tab-pane fade active show")
		{
			document.querySelector(".tgh5").textContent = "Course 3";
			var c3DispName = document.querySelectorAll(".c3DispName");
			var c3TotalDownloads = document.querySelectorAll(".c3totalDownload");
			leaderBoard(c3DispName,c3TotalDownloads);
		}
		if(tab[3].className == "tab-pane fade show active" || tab[3].className == "tab-pane fade active show")
		{
			document.querySelector(".tgh5").textContent = "Course 4";
			var c4DispName = document.querySelectorAll(".c4DispName");
			var c4TotalDownloads = document.querySelectorAll(".c4totalDownload");
			leaderBoard(c4DispName,c4TotalDownloads);
		}

	}); 
}

document.querySelector("#leadbtn").addEventListener("click", function(){
	document.querySelector(".topgem").classList.toggle("noLboard");
	document.querySelector(".topgem").classList.toggle("Leaderboard");
	document.querySelector("#leadicon").classList.toggle("fa-bars");
	document.querySelector("#leadicon").classList.toggle("fa-times");
	this.classList.toggle("btn-primary");
	this.classList.toggle("btn-danger");
	document.querySelector(".LBoardContent").classList.toggle("d-none");


});

// document.querySelector("#leadbtn").addEventListener("click",function(){
// 	document.querySelector(".tab-content").classList.toggle("hidePanel");
// });

function leaderBoard(cDispName,cTotalDownloads)
{
	var LeadName = [];
	var LNumber = [];

	for(var i=0;i<cTotalDownloads.length;i++)
	{
		LeadName[i]= cDispName[i].textContent;
		LNumber[i] = Number(cTotalDownloads[i].textContent);
	}


	for(var i=0;i<LNumber.length;i++)
	{
		for(var j=i;j<LNumber.length;j++){
			if(LNumber[j]>LNumber[i])
		{
			var temp = LNumber[i];
			var tempName = LeadName[i];
			LNumber[i]=LNumber[j];
			LeadName[i]=LeadName[j];
			LNumber[j]=temp;
			LeadName[j]=tempName;
			}
		}
	}
	var str="";
	for(var i=0;i<LNumber.length;i++)
	{
		str = str + "<li><span class= \"number gradientBg\">" + (i+1) + "</span><span class=\"DisplayName\">"+ LeadName[i] +"</span><span class=\"FloatR\">Downloads</span><span class=\"DisplayTD\">" +LNumber[i] +"</span></li>";
	}

	document.querySelector(".TopGemList").innerHTML =str;
}


document.querySelector("#pills-c1-tab").addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 1";
		var c1DispName = document.querySelectorAll(".c1DispName");
		var c1TotalDownloads = document.querySelectorAll(".c1totalDownload");
		leaderBoard(c1DispName,c1TotalDownloads);
});

document.querySelector("#pills-c2-tab").addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 2";
		var c2DispName = document.querySelectorAll(".c2DispName");
		var c2TotalDownloads = document.querySelectorAll(".c2totalDownload");
		leaderBoard(c2DispName,c2TotalDownloads);
});

document.querySelector("#pills-c3-tab").addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 3";
		var c3DispName = document.querySelectorAll(".c3DispName");
		var c3TotalDownloads = document.querySelectorAll(".c3totalDownload");
		leaderBoard(c3DispName,c3TotalDownloads);
});

document.querySelector("#pills-c4-tab").addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 4";
		var c4DispName = document.querySelectorAll(".c4DispName");
		var c4TotalDownloads = document.querySelectorAll(".c4totalDownload");
		leaderBoard(c4DispName,c4TotalDownloads);
});

dropItems[0].addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 1";
		var c1DispName = document.querySelectorAll(".c1DispName");
		var c1TotalDownloads = document.querySelectorAll(".c1totalDownload");
		leaderBoard(c1DispName,c1TotalDownloads);
});
dropItems[1].addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 2";
		var c2DispName = document.querySelectorAll(".c2DispName");
		var c2TotalDownloads = document.querySelectorAll(".c2totalDownload");
		leaderBoard(c2DispName,c2TotalDownloads);
});
dropItems[2].addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 3";
		var c3DispName = document.querySelectorAll(".c3DispName");
		var c3TotalDownloads = document.querySelectorAll(".c3totalDownload");
		leaderBoard(c3DispName,c3TotalDownloads);
});
dropItems[3].addEventListener("click",function(){
		document.querySelector(".tgh5").textContent = "Course 4";
		var c4DispName = document.querySelectorAll(".c4DispName");
		var c4TotalDownloads = document.querySelectorAll(".c4totalDownload");
		leaderBoard(c4DispName,c4TotalDownloads);
});

function increment(c)
{
	const xhr = new XMLHttpRequest();

	xhr.onload = function(){

	}
	var k = "name="+c+"&course="+courseName();
	xhr.open("POST","/");
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(k);
	xhr.abort();
}