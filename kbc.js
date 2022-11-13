	var arr=[{que:"Which is the longest river in the world?",ch1:"Ganga",ch2:"The Nile",ch3:"Yangtze",ch4:"Amazon"}
	,{que:"Which is the largest island in the world?",ch1:"Andman",ch2:"Medagascar",ch3:"Greenland",ch4:"Ireland"},
	{que:"The percentage of earth surface covered by India is?",ch1:"2.4",ch2:"3.4",ch3:"4.4",ch4:"5.8"},
	{que:"The India's highest annual rainfall is reported at?",ch1:"Sikkim",ch2:"Raj",ch3:"Megahlaya",ch4:"UP"},
	{que:"The Radcliffe line is a boundary between?",ch1:"India and Pakistan",ch2:"India and China",ch3:"India and Myanmar",ch4:"India and Afghanistan"},
	{que:"The only state in India that produces saffron is?",ch1:"J&k",ch2:"Raj",ch3:"UK",ch4:"Kerala"}]
	 


	function doc_create(text)
	{	
		

        //Input
        var i_1=document.createElement("input")
        i_1.setAttribute("type","radio")
        i_1.setAttribute("name","r1")
        q.appendChild(i_1)

        //label
        var l_1=document.createElement("label")
        l_1.innerHTML=" "+text+"<br><br>"
        q.appendChild(l_1)
    }
    
    var random_que= parseInt((Math.random()*arr.length));
    var rd=arr[random_que]
    var val=Object.values(rd)
    // console.log(val)
    	// var q=document.querySelector("body")
    	var q=document.querySelector(".quiz")
        //head
        var h_1=document.createElement('h1')
        h_1.innerHTML=val[0]+"<br><br>";
        q.appendChild(h_1)
        for(var i=1;i<val.length;i++)
        {
        	doc_create(val[i])
        }
 

/////********set Timer****************

	dt=new Date();
	dt.setMinutes(dt.getMinutes()+1)
	var count_timer=dt.getTime()	
	var tim_count=setInterval(function()
		{
			var now=new Date().getTime()
			var diff=count_timer-now;
			var seconds = Math.ceil((diff % (1000 * 60)) / 1000);
			console.log(seconds)
			if(seconds>=10)
			{
				document.getElementById('sec').innerHTML=seconds+" Sec"
			}
			else {
				document.getElementById('sec').innerHTML="0"+seconds+" Sec"
			}

			if(diff<1)
			{
				clearInterval(tim_count);
				window.location.href="Expired.html"
			}
		},1000)