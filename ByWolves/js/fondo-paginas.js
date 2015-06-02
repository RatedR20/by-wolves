/**
 * Created by ByWolves on 14/05/2015.
 */


$(document).ready(function() {
    var random = Math.round(Math.random()*4);
    document.body.style.background = "url('../images/fondo/"+random+".jpg') no-repeat fixed";
    document.body.style.backgroundSize= "cover";
});