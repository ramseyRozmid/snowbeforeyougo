//Source: https://gasparesganga.com/labs/jquery-loading-overlay/#animations

$.LoadingOverlay("show", {
    image       : "",
    fontawesome : "fa fa-snowflake fa-spin"
});

setTimeout(function(){
    $.LoadingOverlay("hide");
}, 1800);
