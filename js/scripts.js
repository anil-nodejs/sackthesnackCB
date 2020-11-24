function menu() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('ourmusic').style.display = 'none';
    document.getElementById('ourstory').style.display = 'none';
    $(".navbar-collapse").removeClass("show");


}
function home() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('ourmusic').style.display = 'none';
    document.getElementById('ourstory').style.display = 'none';
    $(".navbar-collapse").removeClass("show");
    console.log('home activated');

}

function ourstory() {
    document.getElementById('ourstory').style.display = 'block'
    document.getElementById('home').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('ourmusic').style.display = 'none';
    $(".navbar-collapse").removeClass("show");

    console.log('ourstory activated');
}

function ourmusic() {
    document.getElementById('ourmusic').style.display = 'block'
    document.getElementById('home').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('ourstory').style.display = 'none';
    $(".navbar-collapse").removeClass("show");


    console.log('ourmusic activated');
}

// navbar hide after clicked the link
