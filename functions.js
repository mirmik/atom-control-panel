
function UpdaterFunction(arg) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/updater/update/" + arg + "/helloworld?async=1", true);
    xhr.send();
}