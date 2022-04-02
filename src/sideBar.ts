class Sidebar {
    SIDEBAR_CONTENT_ACTIVE : string = "Active";
    public sidebarSection : HTMLElement;
    public navigatorElement : HTMLElement;
    public sidebarMenuList : NodeListOf<HTMLElement>;
    public isSidebarActive :Array<boolean>;
    public menuObject;
    constructor(){
        this.sidebarSection = document.querySelector(".main > .SidebarSection") as HTMLElement;
        this.navigatorElement = this.sidebarSection.querySelector(".sidebar_fixed") as HTMLElement;
        this.sidebarMenuList = this.navigatorElement.querySelectorAll(".menu > .menu_list > li");
        this.isSidebarActive = new Array(this.sidebarMenuList.length);
            this.isSidebarActive.fill(false);
        this.menuObject = this.GetSectionObeject();
    }
    private GetSectionObeject() {
        let index = 0;
        let tempObject = new Map;
        let tempKey : string;
            
        this.sidebarMenuList.forEach(_E => {
            tempKey = _E.outerText as string;
            tempObject.set(tempKey, index++);
        });
        return tempObject;
    }
    public MenuActive(_curSectionIndex : number) {
        const ACTIVE = this.SIDEBAR_CONTENT_ACTIVE;
        if(this.isSidebarActive[_curSectionIndex] === false){
            this.isSidebarActive.fill(false);
            this.isSidebarActive[_curSectionIndex] = true;
            this.sidebarMenuList.forEach(_E => {
                _E.classList.remove(ACTIVE);
            })
            this.sidebarMenuList[_curSectionIndex].classList.add(ACTIVE);
        }
    }
}

const sideBarInstance : Sidebar = new Sidebar();

export {sideBarInstance};