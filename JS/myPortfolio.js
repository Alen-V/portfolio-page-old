let imageButton = document.getElementsByClassName(`image-height`);
let hiddenPage = document.getElementsByClassName(`hiddenPage`);
let showImage = document.getElementsByClassName(`fullImage`)
let body = document.getElementsByTagName(`body`)
let hideMainPage = document.getElementsByClassName(`hidePage`)
let goBackBtn = document.getElementsByClassName(`back-button`)

function hidePage(pages) {
    for (let page of pages) {
        page.style.display = `none`
    }
}

function showPages(pages) {
    for (let page of pages) {
        page.style.display = `block`
    }
}

function showPage(page) {
    page.style.display = `block`
}

function showFlexPage(flexpage) {
    flexpage.style.display = `flex`
}

for (let i = 0; i < imageButton.length; i++) {
    imageButton[i].addEventListener(`click`, function() {
        hidePage(showImage)
        hidePage(hideMainPage)
        showPage(goBackBtn[0])
        showFlexPage(hiddenPage[0])
        showPage(showImage[i])
    })    
}

goBackBtn[0].addEventListener(`click`, function(){
    hidePage(goBackBtn)
    hidePage(hiddenPage)
    showPages(hideMainPage)
    showFlexPage(hideMainPage[0])
})