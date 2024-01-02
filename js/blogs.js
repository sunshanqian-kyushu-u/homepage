function manage_blogs_articles(md){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', md, true);
    xhr.responseType = 'text';

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('articles').innerHTML = marked.parse(xhr.responseText);
        } else {
            document.getElementById('articles').innerHTML = "Page lost. Please mail to the author. Thank you! "
        }
    };

    xhr.send();
}

function manage_blogs_catalogs(md){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', md, true);
    xhr.responseType = 'text';

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('catalogs').innerHTML = marked.parse(xhr.responseText);
        } else {
            document.getElementById('catalogs').innerHTML = "Page lost. Please mail to the author. Thank you! "
        }
    };

    xhr.send();
}