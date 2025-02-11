const themBtn = document.querySelector('.theme');
themBtn.addEventListener('click', function() {
    console.log(1);
const currentThem = document.body.classList[0];
if (currentThem == 'dark') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
} else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
}
});
