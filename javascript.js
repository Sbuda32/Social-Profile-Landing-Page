var toggleButton = document.getElementById('toggleButton');
var dropDownRatingButton = document.getElementById('dropDownRatingButton');

var leftPanel = document.getElementById("leftPanel");
var coverPageImage = document.getElementById('coverPageImage');
var navBar = document.getElementById('navBar');
var statusBar = document.getElementById('statusBar');
var feedsAndPosts = document.getElementById('feedsOrPosts');
var circlesSection = document.getElementById('circlesSection');
var profilePicture = document.getElementById('profilePicture');

toggleButton.onclick = function () {
    toggleButton.classList.toggle('toggleButtonFade');

    leftPanel.classList.toggle('hide-left-panel');
    coverPageImage.classList.toggle('cover-page-image-fade');
    navBar.classList.toggle('nav-bar-fade');
    statusBar.classList.toggle('status-bar-fade');
    feedsAndPosts.classList.toggle('feeds-or-posts-fade');
    circlesSection.classList.toggle('circles-section-fade');
    profilePicture.classList.toggle('profile-picture-fade');
};

dropDownRatingButton.onclick = function () {
    var dropDownContent = document.getElementById('dropDownContent');

    dropDownContent.classList.toggle('dropdown-content-show')
}


