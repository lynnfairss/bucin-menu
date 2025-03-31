function showMenu() {
    document.getElementById('menu').style.display = 'block';
}

function showContent(id) {
    let contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
