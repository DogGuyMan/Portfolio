//import {_var_} from './___.ts'
import {sectionClass} from './section'
import {sideBarInstance} from './sideBar'

console.log("bundle complete");

function sideBarInit(){
    sideBarInstance.ScrollMenuActive(sectionClass.GetCurIndex());
    sideBarInstance.MouseMenuActive(sectionClass.mSectionSetElements);
    sideBarInstance.HandleResize();
}

function main(){
    sideBarInit();
    window.addEventListener('scroll', ()=>{
        sideBarInstance.ScrollMenuActive(sectionClass.GetCurIndex());
    })

}

main();

//console.log("_var_");