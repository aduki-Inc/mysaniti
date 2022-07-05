// For Opening & Closing Mysaniti Menu
const checkbox = document.querySelector("input[type=checkbox]");
const aside = document.querySelector(".aside");

// For closing and opening Info Action
const infoToggles = document.querySelectorAll('#info');
const infos = document.querySelectorAll('#info-mobile');
const closeInfoToggles = document.querySelectorAll('#close')

const toggle = document.querySelector('.mysaniti');
const create = document.querySelector('.create');

// For Opening and Closing  Create Post Modal
const modal = document.querySelector(".create-post-modal");
const btn = document.getElementById("create");
const span = document.getElementsByClassName("close")[0];

//For Opening & Closing Profile Dropdown
const profileBtn = document.querySelector('#profile-dropdown');
const profileModal = document.querySelector('.p-down');
let remove = false;

//Opening & Closing Mysaniti Menu
checkbox.addEventListener('change', function () {
    if (this.checked) {
        modal.style.setProperty('display', 'none');
        aside.style.setProperty('right', '0px');
        toggle.classList.add('display');
        create.classList.remove('display');
    } else {
        aside.style.setProperty('right', '-500px');
        toggle.classList.remove('display');
    }
});

// Displaying Info Action Modal
infoToggles.forEach((tog, index) => {
    const info = infos[index];
    tog.addEventListener('click', function () {
        info.style.setProperty('display', 'flex');
    });
});

//Closing Info Action Modal
closeInfoToggles.forEach((close, index) => {
    const info = infos[index];
    close.addEventListener('click', function () {
        info.style.setProperty('display', 'none');
    });
});


// OPening Create Post Modal
btn.addEventListener('click', function () {
    if (checkbox.checked) {
        aside.style.setProperty('right', '-500px');
        toggle.classList.remove('display');
        modal.style.setProperty('display', 'flex');
        create.classList.add('display');
    }
    else {
        modal.style.setProperty('display', 'flex');
        create.classList.add('display');
    }
});

//Closing Create Post Modal
span.addEventListener('click', function () {
    modal.style.setProperty('display', 'none');
    create.classList.remove('display');
});



// OPening & Closing Profile dropdown
function dropdown() {
    if (remove === false) {
            profileModal.style.setProperty('display', 'flex');
            remove = true;
        }
        else{
            profileModal.style.setProperty('display', 'none');
            remove = false;
        };
    }
profileBtn.addEventListener('click',dropdown);


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        create.classList.remove('display');
    }
}