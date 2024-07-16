function loadHTML(file, elementId, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
            if (callback) callback();
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}