/*===========================================================*/
/*【】*/
/*===========================================================*/


/*===========================================================*/
/*【】*/
/*===========================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('.list');

    function activeLink() {
        list.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    }

    list.forEach(function(item) {
        item.addEventListener('click', activeLink);
    });
});
