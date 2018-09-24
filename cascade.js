class Cascade {
    constructor(element, delay){
        this.element = element;
        this.delay = delay;
    }
    cascade(){
        this.element.forEach((element, index)=>{
            element.style.animationDelay = (this.delay*index) + 's';
            console.log(element.style.animationDelay = (this.delay*index));
        })
    }
}