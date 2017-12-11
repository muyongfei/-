/*
* @Author: cat
* @Date:   2017-12-06 08:42:21
* @Last Modified by:   cat
* @Last Modified time: 2017-12-11 07:12:53
*/
window.onload=function(){
//按需加载
  var  dudu=document.getElementsByClassName('dudu');
    window.onscroll = function(){
        var chushi = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || document.scrollY
        for(i=0;i<dudu.length;i++){
            if(chushi>dudu[i].offsetTop-200){
                var img1=dudu[i].getElementsByTagName('img');
                for(j=0;j<img1.length;j++){
                    // console.log(img1[i])
                    
                    img1[j].src=img1[j].getAttribute('vttr');
                    // console.log(img1[i].vttr);
                }
            }
        }
    //跳转
        let top=document.body.scrollTop || document.documentElement.scrollTop  ||  window.scrollY || window.pageXOffset;
        if(top>hulu[0].offsetTop-200){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
        for(i=0;i<hulu.length;i++){
            if(top>hulu[i].offsetTop-300){
                bian=i;
                for(a=0;a<hulu.length;a++){
                    wa[a].style.background='#918888';
                }
                wa[i].style.background='red';
            }
        }
    let gao=document.documentElement.scrollTop?document.documentElement:document.body;
    for(let i=0;i<wa.length;i++){
        wa[i].onclick=function(){
            // gao.scrollTop=hulu[i].offsetTop;
            animate(gao,{scrollTop:hulu[i].offsetTop},1000,Tween.Linear,function(){});
        }
    }
    for(let q=0;q<wa.length;q++){
        wa[q].onmouseover=function(){
            wa[q].style.background='red';
        }
        wa[q].onmouseout=function(){
            if(q !== bian){
                wa[q].style.background='#918888';
            }
            
        }
    }
    }



//选项卡
	let left=document.getElementsByClassName('title');
	// let xuan=document.getElementsByClassName('xuan');
	for(let i=0;i<left.length;i++){
		let xuan=left[i].getElementsByClassName('xuan')[0];
		left[i].onmouseover=function(){
			xuan.style.display='block';
		}
		left[i].onmouseout=function(){
			xuan.style.display='none';
		}
	}

//导航
	let  biaoti=document.getElementsByClassName('biaoti');
	for(i=0;i<biaoti.length-1;i++){
		let neirong=biaoti[i].getElementsByClassName('neirong')[0];
		console.log(neirong);

		biaoti[i].onmouseover=function(){
			
			neirong.style.display='block';
			
		}
		biaoti[i].onmouseout=function(){
			neirong.style.display='none'; 
		}
	}
		let neirong=biaoti[biaoti.length-1].getElementsByClassName('neirong')[0];
		biaoti[biaoti.length-1].onmouseover=function(){
			
			neirong.style.display='flex';
			
		}
		biaoti[biaoti.length-1].onmouseout=function(){
			neirong.style.display='none'; 
		}
//排行榜
	let  paihang=document.getElementsByClassName('fdrdh')[0];
	console.log(paihang);
	let  baijiu=paihang.getElementsByTagName('a');
	console.log(baijiu);
	let  fdrnr=document.getElementsByClassName('fdrnr');
	// console.log(fdrnr);
	for(let i=0;i<baijiu.length;i++){
		baijiu[i].onmouseover=function(){
			for(let a=0;a<fdrnr.length;a++){
				fdrnr[a].style.display='none';
				// console.log(fdrnr[a]);
			}
			fdrnr[i].style.display='block';
			// alert(1);
		};
		// console.log(fdrnr[i]);
	}
//xiao
    let  yidong=document.getElementsByClassName('yidong');
    console.log(yidong);
    let  zhzh=document.getElementsByClassName('zhzh');
    for(let i=0;i<yidong.length;i++){
        yidong[i].onmouseover=function(){
            for(let a=0;a<zhzh.length;a++){
                zhzh[a].style.display='none';
        
            }
            zhzh[i].style.display='block';
           
        };
    }
//轮播
		let now = 0;
        
        let bannerImg = document.querySelectorAll('.shban>.shan1');
        let bannerRadius = document.querySelectorAll('.bndian>ul>li');//轮播点
        let zuo=document.querySelector('.xiangzuo');
        let you=document.querySelector('.xiangyou');
        let bannerTime = setInterval(move,1000);
        // 点击轮播点
        bannerRadius.forEach(function(ele,index){
            ele.addEventListener('click', function(){
                bannerImg.forEach(function(ele1 , index1){
                ele1.style.opacity = 0;
                bannerRadius[index1].style.cssText='background-color:#fff';
            });
                bannerImg[index].style.opacity = 1;
                this.style.cssText='background-color:orangered';
                now=index;
            })
        });
        function move(type){
            type=type ||  'right';
            if(type == 'right'){
                /*now++;
                if(now>=bannerImg.length){
                    now=0;
                }*/
                if(now == bannerImg.length-1){
                    now= -1;
                }
                now++;
            }
            if(type == 'left'){
                if(now==0){
                    now=bannerImg.length;
                }
                now--;
            }
            bannerImg.forEach(function(ele , index){
                ele.style.opacity = 0;
                bannerRadius[index].style.cssText='background-color:#fff';
            });
            bannerImg[now].style.opacity = 1;
            bannerRadius[now].style.cssText='background-color:orangered';
            // now++;
        }

        let bannerBox = document.querySelector('.shban');
        console.log(bannerBox);
        bannerBox.onmouseover = function(){
            clearInterval(bannerTime);
        }
        bannerBox.onmouseout = function(){
            bannerTime =setInterval(move,1000);
        }
        you.addEventListener('click',function(){
            move('right');
        });
        zuo.addEventListener('click',function(){
            move('left');
        });
// 楼层跳转
    let item=document.querySelector('.vvv');
    let hulu=document.querySelectorAll('.tiao');
    let wa=document.querySelectorAll('.vvv>.quba');
    // console.log(item,hulu,wa);
    let bian;
    let dingbu=document.querySelector('.dingbu');
    dingbu.onclick=function(){
        scrollTo(0, 0);
    }
//节点轮播
    let bottom = document.querySelector('.mbleft1');
    let lbtn = document.querySelector('.zuo');
    let rbtn = document.querySelector('.you');
    let widths = bottom.firstElementChild.offsetWidth;
    let rights = parseInt(getComputedStyle(bottom.firstElementChild,null).marginRight);
    let count = bottom.childElementCount;
    bottom.style.width = count * (widths + rights) + 'px';
    let num = 0;
    rbtn.onclick = function(){
        if(num == 3){
            // rbtn.className = 'button-active';
            rbtn.classList.add('button-active');
            // lbtn.className = '';
            lbtn.classList.remove('button-active');
            return;
        }
        num++;
        bottom.style.transform = `translateX(${-1000*num}px)`;
    }
    lbtn.onclick = function(){
        if(num == 0){
            // lbtn.className = 'button-active';
            lbtn.classList.add('button-active');
            // rbtn.className = '';
             rbtn.classList.remove('button-active');
            return;
        }
        num--;
        bottom.style.transform = `translateX(${-1000*num}px)`;
    }
}

