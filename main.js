// Drop Down toggle
const project = document.getElementById('drop_project');
const DropProject = document.getElementById('D1');
const Drop1 = document.getElementById('dropListProject');
project.addEventListener('click', () => {
    DropProject.classList.toggle('show-drop');
    Drop1.classList.toggle('hidden');
})

const Setting = document.getElementById('drop_setting');
const DropSetting = document.getElementById('D2');
const Drop2 = document.getElementById('dropListSetting');
Setting.addEventListener('click', () => {
    DropSetting.classList.toggle('show-drop');
    Drop2.classList.toggle('hidden');
})

// sidebar toggle
const Sidebar = document.getElementById('sidebar');
const SidebarBtn = document.getElementById('SidebarBtn');
const SidebarToggle = document.getElementById('sidebarToggle');
SidebarBtn.addEventListener('click', () => {
    Sidebar.classList.add('shifted');
    SidebarToggle.classList.remove('st-active');
    DropProject.classList.add('show-drop');
    Drop1.classList.add('hidden');
    DropSetting.classList.add('show-drop');
    Drop2.classList.add('hidden');
})
SidebarToggle.addEventListener('click', () => {
    Sidebar.classList.remove('shifted');
    SidebarToggle.classList.add('st-active');
    DropProject.classList.add('show-drop');
    Drop1.classList.add('hidden');
    DropSetting.classList.add('show-drop');
    Drop2.classList.add('hidden');
})

// language toggle
const lang_knob = document.querySelector('.lang-toggle-knob');
const lang_toggle = document.querySelector('.lang-toggle-switch');

let isPersian = false;
lang_toggle.addEventListener('click', () => {
    isPersian = !isPersian;
    lang_knob.style.left = isPersian ? 'calc(100% - 13px)' : '1px';
});


// const language = document.getElementById("Language");
// if (isPersian = true) {language.innerHTML = "زبان ها"} else { language.innerHTML = "Language"};  