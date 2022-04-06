//import {_var_} from './___.ts'
const _sectionClass = require('./section');
const _sideBarInstance = require('./sideBar');

console.log("bundle complete");

function sideBarInit(){
    _sideBarInstance.ScrollMenuActive(_sectionClass.GetCurIndex());
    _sideBarInstance.MouseMenuActive(_sectionClass.mSectionSetElements);
    _sideBarInstance.HandleResize();
}

function main(){
    sideBarInit();
    window.addEventListener('scroll', ()=>{
        _sideBarInstance.ScrollMenuActive(_sectionClass.GetCurIndex());
    })

}

main();

//console.log("_var_");