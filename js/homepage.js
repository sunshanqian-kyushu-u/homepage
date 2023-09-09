function managemd(md){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', md, true);
    xhr.responseType = 'text';

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('main-article').innerHTML = marked.parse(xhr.responseText);
        } else {
            document.getElementById('main-article').innerHTML = "Page lost. Please mail to the author. Thank you! "
        }
    };

    xhr.send();
}
