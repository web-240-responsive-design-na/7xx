// JavaScript Document

window.onload = function () {

    for (i = 0; i < 36; i++) {
        let v = Math.floor(Math.random() * (150 - 0)) + 0;
        let y = Math.floor(Math.random() * (window.innerWidth - 0)) + 100;
        let itm = document.getElementById("tree");
        let cln = itm.cloneNode(true);
        cln.style.bottom = v + 'px';
        cln.style.left = (y) + 'px';
        cln.style.zIndex = -1;
        document.body.appendChild(cln);
    }

}
