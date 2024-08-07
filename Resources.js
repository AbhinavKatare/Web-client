function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openInnerTab(evt, tabName) {
    var i, tabcontentInner, tablinksInner;
    tabcontentInner = document.getElementsByClassName("tabcontent-inner");
    for (i = 0; i < tabcontentInner.length; i++) {
        tabcontentInner[i].style.display = "none";
    }
    tablinksInner = document.getElementsByClassName("tablink-inner");
    for (i = 0; i < tablinksInner.length; i++) {
        tablinksInner[i].className = tablinksInner[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablink').click();
    document.querySelector('.tablink-inner').click();
});
