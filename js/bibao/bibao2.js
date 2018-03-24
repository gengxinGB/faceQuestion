/**
 * Created by 魏秋娟 on 2018/3/21.
 */
function Ninja(){
    let feitns=0;
    this.getFeitns=function () {
        return feitns;
    };
    this.feitn=function () {
        feitns++;
    }
}
let ninjs=new Ninja();
console.log(ninjs.getFeitns());
console.log(ninjs.feitn());