define([],function(cookiedata){
	return {
		get:function(name){
			var arr=document.cookie.split("; ");
			for(var i=0;i<arr.length;i++){
				var newarr=arr[i].split("=");
				
				if(newarr[0]==name){
					return (newarr[1]);
					
				}
			}
			
			return null;
		},
		set:function(key,value,n,path){
	//		var d=new Date();
	//		d.setDate(d.getDate()+n);
			
			
			if(typeof n=="number"||typeof n=="string"){
				n=Number(n);
				if(isNaN(n)){
					n=undefined;
				}else{
					var d=new Date();
					d.setDate(d.getDate()+n);
					
				}
			}
			if(!(n instanceof Date) && typeof n=="object"){
				n=undefined;
			}
			
			
			return document.cookie=key+"="+value+";"+(n?"expires="+d+";":"")+(path?"path="+path+";":"");
			
		}
		
	}
})