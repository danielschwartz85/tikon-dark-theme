
// Non minified:

const body = document.body;
const html = document.documentElement;
let height = 0;
let h = 0;

const initiateHeights = function () {
    height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log("heights were initialised:", height, h);
}
initiateHeights();

const resize = function (e) {
    const scrolled = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    height > 0 ? e[0].style.width = scrolled / (height - h) * 100 + "%" : e.style.width = 0 + "%";
}
document.onscroll = function () {
    resize(document.getElementsByClassName("indicator"));
};
window.onresize = function () {
    initiateHeights();
}

// Minified:
//    const body=document.body,html=document.documentElement;let height=0,h=0;const initiateHeights=function(){height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight),h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,console.log("heights were initialised:",height,h)};initiateHeights();const resize=function(t){let e=Math.max(document.body.scrollTop,document.documentElement.scrollTop);height>0?t[0].style.width=e/(height-h)*100+"%":t.style.width="0%"};document.onscroll=function(){resize(document.getElementsByClassName("indicator"))},window.onresize=function(){initiateHeights()};