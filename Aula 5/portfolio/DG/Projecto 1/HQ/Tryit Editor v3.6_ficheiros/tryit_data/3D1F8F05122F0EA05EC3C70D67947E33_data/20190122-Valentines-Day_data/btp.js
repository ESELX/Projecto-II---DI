//Tom Top

/*window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);
  (function(){
    var k=document.createElement('script');k.type='text/javascript';k.async=true;
    k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/sjoy22onq.js';
    var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);
  }());
*/
try{
var cybbaDataLayer = {
	u : {	//user
		onsiteInteraction : "", //if interaction with onsite logged
		emailCollected : "", 	//if and email address has been logged
		pagesBrowsed : "",		//# of pages browsed
		convBucket : "",		//conversion bucket (1,7,30,365)
		aBucket : "",			//age bucket (20,30,40)
		newUser : "",			//t-f based on if user visited site before
		loggedIn : "",
		siteVisits : "",		//number of unique trips to site
		custom : ""				//custom data
	},
	p : {	//page
		completeURL : window.location.href,			
		queryString : window.location.search,			 
		pageCategory : "",		//type of page (product,cart,checkout)
		domain : window.location.host,				
		subdomain : "",			//if available
		currency : "USD",
		custom : ""		
	},
	r : {	//retail
		productName : "",			
		productPrice : "",
		productAttribute : "",
		productCategory : document.querySelector(".Bread_crumbs.lbUl") ? document.querySelector(".Bread_crumbs.lbUl").textContent.trim().replace(/\s/g, '').replace(/\n/g, "").replace(/\t/g, ""):"",
		total : "",
		custom : ""				//custom data
	},
	l : {	//leadGen
		formID : "",				
		total : "",
		recurring : "",			//whether transaction repeats
		custom : ""				//custom data
	},
	t : {	//travel
		daysOutBucket : "",		//days until travel/stay begins
		duration : "",			//days that travel/stay will last
		locStart : "",			//starting location
		locEnd : "",			//ending location
		travelers : "",			//# of people
		total : "",
		custom : "travel test"				//custom data
	},
	e : {	//education
		program : "",
		programCat : "",		//law,business,physics	
		programLevel : "",		//grad,ugrad,hs,etc
		eduLevel : "",			//grad,ugrad,hs,etc
		eduBackground : "",		//science, math, cs, soc sci, etc
		custom : ""				//custom data
	}
}

}catch(e){}