# Sidebar 모듈

#### [전체 README.md로 돌아가기](../../../포트폴리오/README.md)

---
## 개요

---

### 목적
* 현재 위치한 Section에 대해 Sidebar가 활성화 된다.

### 구성
* #### Sidebar : Class
  * 멤버 변수
    ``` ts
        public mSidebarSection: HTMLElement /사이드바 전체 (fixed부분 & space부분) DOM을 가져온다/
        public mNavigatorElement: HTMLElement /display : fixed 된 사이드바 DOM을 가져온다/
        public mMenuElement: HTMLElement /활성화될 대상을 가져온다/
        public mActiveSliderBox: HTMLElement /활성화된 Menu위를 지나다니는 블럭을 가져온다/
        public mSidebarMenuList: NodeListOf < HTMLElement > /Section Menu리스트를 NodeList로 가져온다./
        public mIsSidebarActive: Array < boolean > /메뉴가 활성화되었는지 아닌지 불형 리스트를 만든다./
            public mActiveSidebarIndex : number /활성화된 메뉴 인덱스/
        public mMenuObject /Section과 그에 해당하는 인덱스를 딕셔너리 컨테이너로 만든다./

    ```
  * 매서드
    ```ts
        constructor(){...} /멤버변수 초기화/
        private GetSectionObeject(){...} /mMenuObject 초기화/
        public ScrollMenuActive(_curSectionIndex: number) /현재 위치한 section의 인덱스를 받아 사이드바 메뉴를 활성화 시킨다./
        public HandleResize()/브라우저 창을 조작할때 absolute position 된 mActiveSliderBox를 알맞는 위치로 조정시키는 매서드/
        public MouseMenuActive(_sectionSetElements : NodeListOf<HTMLElement>) /메뉴 클릭 이벤트를 받아 해당하는 section으로 이동하는 매서드/
    ```

* #### 세팅
commonJs를 통해 모듈 import를 한다.

  * export
    ```ts
    const sideBarInstance: Sidebar = new Sidebar();
    module.exports = sideBarInstance;
    ```
  * import
    ```ts
    const _sideBarInstance = require('./sideBar');
    ```
---

### 스크립트
```ts
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
```