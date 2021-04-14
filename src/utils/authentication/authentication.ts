
export const authenticateUser = () => {
    return new Promise((resolve, reject)=>{
        if(localStorage.getItem('token') && localStorage.getItem('token')==='123'){
            resolve('success')
        }
        reject('failed');
    })
}