export function getStorage(str?:string): string {

    let stroageValue
    if (localStorage){
        stroageValue = typeof str != 'undefined'  ? localStorage.getItem(str) : localStorage.getItem('token');
    }else{
        return ''
    }
    let jsonValue
    try {
        if (stroageValue) {
            jsonValue = JSON.parse(stroageValue);
        }
    } catch (e) {
        jsonValue = stroageValue;
    }
    return jsonValue
}


export function setStorage(str:string ,value: string | string[]): void {
    localStorage.setItem(str, JSON.stringify(value));
}