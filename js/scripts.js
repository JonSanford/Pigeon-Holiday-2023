

document.querySelectorAll('.door').forEach(el => {
    let door = el.dataset.door;
    el.addEventListener('click', event => openModal(door));
});

document.querySelectorAll('.btn-close-modal').forEach(el => {
    let door = el.dataset.door;
    el.addEventListener('click', event => closeActiveModal(el));
});

let activeModal = "";
function openModal(door) {
    closeModals();
    document.body.classList.add('has-open-modal');
    document.getElementById(door).classList.remove('out');
    document.getElementById(door).classList.add('active');
    document.getElementById(door).querySelector('.btn-close-modal').focus();
    activeModal = document.getElementById(door);
}

function closeModals() {
    document.body.classList.remove('has-open-modal');
    document.querySelectorAll('.modal-container').forEach(el => {
        //el.classList.remove('active');
    })
}

function closeActiveModal(el) {
    document.body.classList.remove('has-open-modal');
    el.closest('.modal-container').classList.add('out');
}
