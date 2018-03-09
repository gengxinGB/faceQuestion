/**
 * Created by 魏秋娟 on 2018/3/8.
 */
let Reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/;
function checkPwd(pwd) {
    if(!Reg.test(pwd)){
        console.log("false");
    }else{
        console.log('true');
    }
}
checkPwd("aaaayy555");
