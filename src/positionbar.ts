let progPer = function return_window_Y_Percentage(curY : number){
    let entireHeight = document.documentElement.scrollHeight;
    return ~~((curY * 100) / (entireHeight - window.innerHeight));
};

function progressBar(_per : number){
    if(progressElement !== null){
        progressElement.style.height = `${_per}vh`;
    }
}