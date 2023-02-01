
function UpdaterFunction(arg) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "updater/update/" + arg + "/helloworld?async=1", true);
    xhr.send();
}
