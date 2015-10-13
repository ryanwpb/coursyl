// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
// function updateCourse(button) {
//   var =   data: { disable_with: "Course Updating..." }
// }



// function hideLastEl() {
// var length = document.getElementsByClassName("row").length;
// var lastElement = document.getElementsByClassName("row")[length-1];
// lastElement.style.display = "none";
// }
function upDateCourse() {
  $('.btn').last().attr("disable",true)
}
$( upDateCourse);

function hidelastrow() {
  $('.association.container').last().hide()
}

$(hidelastrow);
function showLastRow() {
  $('#add_grade').click(function(){
      $('.association.container').last().show()
  })
}
$(showLastRow);

// When a Delete button is clicked, hide the row to which it belongs, but mark the hidden _destroy field in that row as truthy.
function hideDeleteRow(){
  $(event.target).closest(".association.container").hide();
  $(event.target).siblings().last().prop("checked", true);
}
function clickAndDelete() {
  $(".btn-danger").on("click", hideDeleteRow);
}
$(clickAndDelete);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
Add Comment Click to expand inline 
