const fetchData = new Promise((resolve, reject)=>{
    const success = false;
    if(success){
        resolve("Data fetched");
        console.log("Data fetched log");
    }
    else{
        reject("Data not Found Error");
        // console.log("Data not found")
    }

});

fetchData.catch((error) => {
    console.log("Error occured",error);
})