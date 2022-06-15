//Skrypt z Fetch API
//sprawdź czy DOM został załadowany:
document.addEventListener("DOMContentLoaded", function () {
    //obsługa zdarzenia kliknięcia na b1:
    window.addEventListener('load', function () {
        fetch("http://localhost/WWW/public_html/data/news.txt")
            .then(response => {
                return response.text();
            })
            .then(dane => {
                document.getElementById("main-news-text").innerHTML = dane;
            })
    },
    false);

    window.addEventListener('load', function () {
        fetch("http://localhost/WWW/public_html/data/trailers.txt")
            .then(response => {
                return response.text();
            })
            .then(dane => {
                document.getElementById("main-trailers-text").innerHTML = dane;
            })
    },
    false);

    window.addEventListener('load', function () {
        fetch("http://localhost/WWW/public_html/data/unique_articles.txt")
            .then(response => {
                return response.text();
            })
            .then(dane => {
                document.getElementById("main-articles-txt").innerHTML = dane;
            })
    },
    false);

})