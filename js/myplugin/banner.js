
function Banner(options){
	this.init=function(){
		var sel = document.getElementsByClassName(options.selector);
		this.ele = sel instanceof Array ? sel[0]:sel;

		this.imglist=this.ele.children;
//		console.log(this.imglist);
		
		this.rect = {width:this.ele.offsetWidth,height:this.ele.offsetHeight};
		
		//图片下方按钮的下标；
		this.currentIndex = 0;
		this.count = this.imglist.children.length;
		if(options.pagenav){
			var oul=document.createElement("ul");
			oul.className="pagenav";
			oul.style.width=20*this.count +"px";
			for(let i=0;i<this.count;i++){
				var oLi=document.createElement("li");
				oul.appendChild(oLi);
			}
			
			this.navs=oul.children;
			
			this.navs[0].className="active";
			this.ele.appendChild(oul);
		}
		
	}
	this.init();
	this.next=function(){
		this.currentIndex++;
		if(options.loop){
			if(this.currentIndex >=this.count){
				this.currentIndex = 0;
			}
		}
		if(this.currentIndex >= this.count){
			return ;
		}
		
		options.pagenav? this.tagnav():"";
		this.tagImg();
	}
	this.tagImg=function(){
		animate(this.imglist,{left:-this.rect.width * this.currentIndex});
	}
	this.tagnav=function(){
		for(let i=0;i<this.navs.length;i++){
			this.navs[i].className = ""; 
		}
		this.navs[this.currentIndex].className="active";
		
		
	}
	
	this.prev=function(){
		this.currentIndex --;
		
		//测试相应的图片的left 值；
		/*if(this.imglist.offsetLeft <= 0){
			this.imglist.style.left = -2430 +"px" ;
			
		}*/
		if(options.loop){
			if(this.currentIndex < 0){
				
				this.currentIndex = this.count-1;
			}
			log(this.currentIndex);
		}
		/*if(this.currentIndex == 0){
			return ;
		}*/
		options.pagenav ? this.tagnav():"";
		this.tagImg();
	}
	return new Banner();
}