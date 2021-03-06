const ulTag = document.querySelector("ul")

// ulTag.innerHTML = element(totalPages,page)
function element(totalPages,page) {
    let liTag = ''
    let activeLi;
    let beforePage = page - 1;
    let afterPage = page + 1;

    if(page>1){
        liTag+=`<li class="btn prev" onclick="element(${totalPages},${page-1})"><span><i class="fa-solid fa-angle-left"></i> Prev</span></li>`
    }

    if (page>2) {
        liTag+=`<li class="numb" onclick="element(${totalPages},1)"><span>1</span></li>`
        if (page>3) {      
            liTag+=` <li class="dots"><span>...</span></li>`
        }   
    }

    if (page==totalPages) {
        beforePage = beforePage-2
    } 
    else if(page==totalPages-1){
        beforePage=beforePage-1
    }

    if (page==1) {
        afterPage = afterPage+2
    } 
    else if(page==2){
        afterPage=afterPage+1
    }

    for (var pageLength = beforePage; pageLength <= afterPage; pageLength++) {
        if (pageLength>totalPages) {
            continue
        }
        
        if (pageLength==0) {
            pageLength = pageLength+1
        }

        if(page==pageLength){
            activeLi = 'active';
        }
        else{
            activeLi=""
        }
        liTag+=`<li class="numb ${activeLi}" onclick="element(${totalPages},${pageLength})"><span>${pageLength}</span></li>`     
    }

    if (page<totalPages-1) {
        if (page<totalPages-2) {      
            liTag+=` <li class="dots"><span>...</span></li>`
        }   
        liTag+=`<li class="numb" onclick="element(${totalPages},${totalPages})"><span>${totalPages}</span></li>`
    }
    
    if (page < totalPages) {
        liTag+=`<li class="btn next" onclick="element(${totalPages},${page+1})"><span>Next  <i class="fa-solid fa-angle-right"></i></span></li>`
    }
    ulTag.innerHTML = liTag
}
element(20,5)
