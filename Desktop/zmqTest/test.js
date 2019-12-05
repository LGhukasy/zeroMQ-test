function func(cb) {
    setTimeout(()=>{
        console.log("async");
        cb();
    },1000)
};
function func1(cb){
    setTimeout(()=>{
        console.log("asyncMS")
    },2000)
}

func(()=>{
    console.log("async1");
    func(()=>{
        console.log("async2");
        func1(()=>{
            console.log("async3")
        })
    })
})

