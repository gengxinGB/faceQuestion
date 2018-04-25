
let arr=["weiqiujuan","nihao",7,[12,14]];
arr.push(10);//添加的属性；
arr.forEach(function (item) {
    console.log(item);
});
async function forDemo01() {
    let arr = [1, 2, 3, 4];
    for (let i = 0; i < arr.length; i ++) {
        let tmp = await arr[i];
        console.log(tmp);
    }
}

forDemo01();