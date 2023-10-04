/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },millis);
    })

    return myPromise;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */