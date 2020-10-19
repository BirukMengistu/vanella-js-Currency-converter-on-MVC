var Helper = {};

Helper.show = function (tag) {
    document.getElementById(tag).style.display="block";
}

Helper.hide = function (tag) {
    document.getElementById(tag).style.display="none";
}

Helper.setValue = function (tag, value) {
    document.getElementById(tag).value = value;
}

Helper.getValue = function (tag) {
    return document.getElementById(tag).value;
}

Helper.setHtml = function (tag, html) {
    document.getElementById(tag).innerHTML = html;
}

Helper.getHtml = function (tag) {
    return document.getElementById(tag).innerHTML;
}

Helper.onClick = function (tag, action) {
    document.getElementById(tag).addEventListener("click", action);
}

Helper.onClassClick = function (class_name, action) {
     var classes = document.getElementsByClassName(class_name);
     for (var i = 0; i < classes.length; ++i) {
         classes[i].addEventListener("click", action);
     }
}

