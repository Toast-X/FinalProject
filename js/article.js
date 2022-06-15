function addArticle() {
    var item = {};
    var title = document.getElementById("title");
    var descr = document.getElementById("descr");
    var article = document.getElementById("article");
    var show_art =  document.getElementById("article-saved");
    if(title.value == "") setBorderColor(title, "red")
    else setBorderColor(title, "#ccc")
    if(descr.value == "") setBorderColor(descr, "red")
    else setBorderColor(descr, "#ccc")
    if(article.value == "") setBorderColor(article, "red")
    else setBorderColor(article, "#ccc")

    if (!(title.value == "" || descr.value == "" || article.value == "")) {
        item.title = title.value;
        item.descr = descr.value;
        item.article = article.value;
        var list = JSON.parse(localStorage.getItem('list'));
        if (list === null) list = []
        list.push(item);
        localStorage.setItem('list', JSON.stringify(list))
        document.getElementById("title").value = "";
        document.getElementById("descr").value = "";
        document.getElementById("article").value = "";
        show_art.style.display = "block";
        setTimeout(function(){
            show_art.style.display = "none";;
        }, 2000);
    }
}

function setBorderColor(obj, color){
    obj.style.borderColor = color;
}

function showArticles() {
    var btn = document.getElementById("delete-article");
    var list = JSON.parse(localStorage.getItem('list'));
    var el = document.getElementById('list');
    if (list === null || list.length === 0) {
        el.innerHTML = "<h2>No articles right now</h2>";
        btn.style.display = "none";
    } 
    else {
        str = "<h3 id ='to-left' style='margin-bottom: 70px'>Number of articles: " + list.length + "</h3>";
        if(list.length > 1)btn.style.display = "block";
        else btn.style.display = "none"
        for (i = 0; i < list.length; i++) {
            str += "<div class='article-text'>";
            str += "<h4>" + list[i].title + "</h4>"
            str += " Description: " + list[i].descr + "<br/>";
            str += "<p>" + list[i].article + "</p>";
            str += "<button class ='delete-art-btn' onclick = 'deleteOne("+i+")'>X</button>"
            // str += "<button class ='edit-art-btn' onclick = 'deleteOne("+i+")'>Edit</button>"
            str += "</div>";
            if(list[i+1] != null && list.length > 0) {
                str += "<hr>" ;
            }
        }
        el.innerHTML = str;
    }

}

function deleteList() {
    if (confirm("Delete all articles?")) {
        localStorage.removeItem('list');
        showArticles();
    }
}

function deleteOne(i){
    var list = JSON.parse(localStorage.getItem("list"));
    if(confirm("Delete this article?")) list.splice(i,1);
    localStorage.setItem('list', JSON.stringify(list));
    showArticles();
}

function editArt(i){
    var list = JSON.parse(localStorage.getItem("list"));
    if(confirm("Delete this article?")) list.splice(i,1);
    localStorage.setItem('list', JSON.stringify(list));
    showArticles();
}