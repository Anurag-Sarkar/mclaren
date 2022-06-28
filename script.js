var slider = document.querySelector("#slider")
let completion = document.querySelectorAll("#completion")
let slides = document.querySelectorAll(".slides")
var index = 1
var firstSlide = slides[0].cloneNode(true)
var overlay = document.querySelector("#overlay")
var lastSlide = slides[slides.length-1].cloneNode(true)
var h1 = document.querySelector("#content h1")
var h4 = document.querySelector("#content h4")
var p = document.querySelector("#content p")
var no = document.querySelectorAll("#one")


var design = {h4:"DESIGN",h1:"AN ICON REIMAGINED",p:"The McLaren Senna is an unparalleled track machine honed for the road. And now… the McLaren Senna GTR.<br> It has all the same spirit. But, freed from all road and motorsport rules, it pushes things to the max.<br> Pared-back, pumped-up then unleashed for track use only… it is, simply put, ferocious."}
var discover = {h4:"DSICOVER",h1:"AN ICON REIMAGINED",p:"The McLaren Senna has a single-minded purpose. In the pursuit of the most rewarding and <br>intuitive driving experience, pioneering active aerodynamics generate unprecedented levels of<br> downforce. It is also the lightest vehicle we have built since the iconic F1, with our most powerful <br>road car engine to date."}
var perfomance = {h4:"PERFOMANCE",h1:"AN ICON REIMAGINED",p:"800PS and 800Nm from a 4.0-litre twin-turbocharged V8, the most powerful internal combustion <br>engine McLaren has ever built. 800kg of downforce made possible by pioneering active aerodynamics. <br>The lightest McLaren since the iconic F1 with dry weight of under 1200kg. A power-to-weight ratio of <br> 668PS-per-tonne (659bhp)"}


firstSlide.id = "firstslide"
lastSlide.id = "lastslide"
slider.append(firstSlide)
slider.prepend(lastSlide)

slider.style.transform = `translateX(${-100 * index}%)`
no[0].style.backgroundColor = "white"

var startSlide = ()=>{
   lol =  setInterval(function(){
       index++
       console.log(index)
       slider.style.transition = "1s"
       slider.style.ease = "ease-out"
       slider.style.transform = `translateX(${-100 * index}%)`
       if (index === 4){
           no[2].style.backgroundColor = "grey"
           no[0].style.backgroundColor = "white"
        }
        if (index === 2){
            no[0].style.backgroundColor = "grey"
            no[1].style.backgroundColor = "white"
        }
        if (index === 3){
            no[1].style.backgroundColor = "grey"
            no[2].style.backgroundColor = "white"
        }
        document.querySelector("#content h1").style.transform = `translateY(-500%)`
        document.querySelector("#content h4").style.transform = `translateY(-510%)`
        document.querySelector("#content p").style.transform = `translateY(-500%)`   
    },3000)
}

slider.addEventListener("transitionend",function(){
    if (index >= 4){
        index = 1
        slider.style.transition = "none"
        slider.style.transform = `translateX(${-100 * index}%)`
        
    }
    if (index === 1){
        // no[2].style.backgroundColor = "grey"
        // no[0].style.backgroundColor = "white"
        document.querySelector("#content h4").textContent = design.h4
        document.querySelector("#content h1").textContent = design.h1
        document.querySelector("#content p").innerHTML = design.p
        
    }
    if (index === 2){
        // no[0].style.backgroundColor = "grey"
        // no[1].style.backgroundColor = "white"
        document.querySelector("#content h4").textContent = discover.h4
        document.querySelector("#content h1").textContent = discover.h1
        document.querySelector("#content p").innerHTML = discover.p       
    }
    if (index === 3){
        // no[1].style.backgroundColor = "grey"
        // no[2].style.backgroundColor = "white"
        document.querySelector("#content h4").textContent = perfomance.h4
        document.querySelector("#content h1").textContent = perfomance.h1
        document.querySelector("#content p").innerHTML = perfomance.p       

    }
        document.querySelector("#content h1").style.transform = `translateY(0%)`
        document.querySelector("#content h4").style.transform = `translateY(0%)`
        document.querySelector("#content p").style.transform = `translateY(0%)`
    
        
   
        
})

startSlide()

overlay.addEventListener("mouseenter",function(){
    clearInterval(lol)
    console.log("aagya")
    
})
overlay.addEventListener("mouseleave",function(){
    console.log("CHALLAGYA")
    startSlide()
})
var cross = function(){
    gsap.to("#left",{
        left:"0%",
        width:"100%",
        duration:1,
        ease:Expo.easeInOut
    })
    gsap.to("#imge",{
        left:"-50%",
        delay:1,
    })
    gsap.to("#left",{
        left:"0%",
        width:"30%",
        duration:1,
        delay:0.8,
        ease:Expo.easeInOut
    })
    gsap.to("#lft",{
        opacity:1,
        duration:0.5,
        delay:1.5
    })
    gsap.to("#read",{
        opacity:1,
        x:0,
        duration:0.2,
        delay:0.5
    })
    gsap.to("#slideno",{
        opacity:1,
        duration:0.5,
        delay:1
    })
    gsap.to("#mclaren",{
        opacity:1,
        duration:0.5,
        delay:1
    })
    gsap.to("#senna h5 span",{
        // transform:"translateY(100%)",
        stagger:0.1,
        opacity:1,
        delay:0.2,
        duration:0.5,
        ease:Expo.easeInOut
    })
    gsap.to(".lol",{
        transform:"translateY(900%)",
        stagger:0.1,
   
        duration:1.5,
        ease:Expo.easeInOut
    })
    gsap.to("#cross",{
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
    })

}
var left = function(){
    gsap.to("#left",{
        width:"100%",
        duration:1,
        ease:Expo.easeInOut
    })
    gsap.to("#imge",{
        left:"0%",
        delay:0.2
    })
    gsap.to("#left",{
        left:"50%",
        width:"50%",
        duration:1,
        delay:0.8,
        ease:Expo.easeInOut
    })
    gsap.to("#lft",{
        opacity:0,
        duration:0.5
    })
    gsap.to("#read",{
        opacity:0,
        x:50,
        duration:0.2
    })
    gsap.to("#slideno",{
        opacity:0,
        duration:0.5
    })
    gsap.to("#mclaren",{
        opacity:0,
        duration:0.5
    })
    gsap.to("#senna h5 span",{
        // transform:"translateY(100%)",
        stagger:0.1,
        opacity:0,
        delay:0.2,
        duration:0.5,
        ease:Expo.easeInOut
    })
    gsap.to(".lol",{
        transform:"translateY(0%)",
        stagger:0.1,
        // opacity:0,
        delay:1,
        duration:1.5,
        ease:Expo.easeInOut
    })
    gsap.to("#cross",{
        opacity:1,
        duration:4,
        ease:Expo.easeInOut
    })

}

document.querySelector("#read").addEventListener("click",function(){
    clearInterval(lol)
    left()
})
document.querySelector("#cross").addEventListener("click",function(){
    startSlide()
    cross()
})
