const Bgimage = document.getElementById("introBG");
    const handleMediaQueryChange = () => {
        

        if(window.innerWidth <= 780){
            Bgimage.setAttribute("src", "./images/bg-intro-mobile.svg")            
        Bgimage.setAttribute("alt", `s image small`);
        }   
        else{  
            Bgimage.setAttribute("src", "./images/bg-intro-desktop.svg" )
        Bgimage.setAttribute("alt", 's image big');
            
        }
    }
    handleMediaQueryChange();
    window.addEventListener('resize',handleMediaQueryChange);

    const hamburger = document.getElementById("MenuOpen");
    const closeburger = document.getElementById("menuClose");
    const Navlist = document.getElementById('navlist');
    
    hamburger.addEventListener('click', () => {
        Navlist.style.top = '1em'
    });

    closeburger.addEventListener('click', () => {
        Navlist.style.top = '-40em'
    });
