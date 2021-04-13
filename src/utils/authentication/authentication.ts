
export const authenticateUser = () => {
    return new Promise((resolve, reject)=>{
        if(localStorage.getItem('token') && localStorage.getItem('token')==='token'){
            resolve('success')
        }
        reject('failed');
    })
}