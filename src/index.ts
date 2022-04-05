//import {_var_} from './___.ts'
import {sectionClass} from './section'
import {sideBarInstance} from './sideBar'

console.log("bundle complete");

function main(){
    sideBarInstance.MenuActive(sectionClass.GetCurIndex());
    window.addEventListener('scroll', ()=>{
        sideBarInstance.MenuActive(sectionClass.GetCurIndex());
        console.log(sectionClass.GetCurIndex());
    })
}

main();

//console.log("_var_");