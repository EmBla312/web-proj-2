function openContent(evt, content) {
    var i, tabcontent, tabs;

    tabcontent = document.getElementsByClassName("tab-content");
    console.log("TABCONTENT");
    console.log(tabcontent);

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");
    console.log("TABS");
    console.log(tabs);

    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    
    console.log("BEFORE:");
    console.log(document.getElementById(content));

    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";

    console.log("AFTER:");
    console.log(document.getElementById(content));

}

