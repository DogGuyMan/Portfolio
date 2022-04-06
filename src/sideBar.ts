class Sidebar {
    SIDEBAR_CONTENT_ACTIVE: string = "Active";
    public mSidebarSection: HTMLElement;
    public mNavigatorElement: HTMLElement;
    public mMenuElement: HTMLElement;
    public mActiveSliderBox: HTMLElement
    public mSidebarMenuList: NodeListOf < HTMLElement > ;
    public mIsSidebarActive: Array < boolean > ;
        public mActiveSidebarIndex : number;
    public mMenuObject;
    constructor() {
        this.mSidebarSection = document.querySelector(".main > .SidebarSection") as HTMLElement;
        this.mNavigatorElement = this.mSidebarSection.querySelector(".sidebar_fixed") as HTMLElement;
        this.mMenuElement = this.mNavigatorElement.querySelector(".menu") as HTMLElement;
        this.mActiveSliderBox = this.mMenuElement.querySelector(".ActivedBox") as HTMLElement;
        this.mSidebarMenuList = this.mMenuElement.querySelectorAll(".menu_list > li");
        this.mIsSidebarActive = new Array(this.mSidebarMenuList.length);
        this.mIsSidebarActive.fill(false);
            this.mActiveSidebarIndex = -1;
        this.mMenuObject = this.GetSectionObeject();
    }
    private GetSectionObeject() {
        let index = 0;
        let tempObject = new Map;
        let tempKey: string;

        this.mSidebarMenuList.forEach(_E => {
            tempKey = _E.outerText as string;
            tempObject.set(tempKey, index++);
        });
        return tempObject;
    }
    public ScrollMenuActive(_curSectionIndex: number) {
        const ACTIVE = this.SIDEBAR_CONTENT_ACTIVE;
        if (this.mIsSidebarActive[_curSectionIndex] === false) {
            this.mIsSidebarActive.fill(false);
            this.mIsSidebarActive[_curSectionIndex] = true;
            this.mActiveSidebarIndex = _curSectionIndex;
            this.mSidebarMenuList.forEach(_E => {
                _E.classList.remove(ACTIVE);
            })
            this.mSidebarMenuList[_curSectionIndex].classList.add(ACTIVE);
            this.mActiveSliderBox.style.transition = "0.5s";
            this.mActiveSliderBox.style.left = this.mSidebarMenuList[_curSectionIndex].offsetLeft + 'px';
        }
    }

    public HandleResize(){
        window.addEventListener("resize", ()=>{
            this.mActiveSliderBox.style.transition = "none";
            this.mActiveSliderBox.style.left = this.mSidebarMenuList[this.mActiveSidebarIndex].offsetLeft + 'px';
        })
    }

    public MouseMenuActive(_sectionSetElements : NodeListOf<HTMLElement>) {
        this.mMenuElement.addEventListener(
            "click", 
            (_E) => {
                _E.preventDefault();
                if(_E.target instanceof HTMLElement){
                    let targetElement : HTMLElement = _E.target;
                    let curSectionIdx = this.mMenuObject.get(targetElement.innerText);
                    _sectionSetElements[curSectionIdx].scrollIntoView({behavior: "smooth"});
                }
            }
        )
    }
}

const sideBarInstance: Sidebar = new Sidebar();

module.exports = sideBarInstance;