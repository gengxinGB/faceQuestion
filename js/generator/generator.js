/**
 * Created by 魏秋娟 on 2018/3/8.
 */
function* next_id(){
    for(let current_id=1;current_id<9;current_id++){
        yield current_id;
    }
}

function test(){
    for (let x of next_id(5)){
        console.log(x);
    }
}
test();

0