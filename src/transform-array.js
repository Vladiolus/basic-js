module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let buf = [];
    for (let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "--discard-next":
                i++;
                break;
            case "--discard-prev":
                buf.pop();
                break;
            case "--double-next":
                if (i+1 < arr.length) buf.push(arr[i+1]);
                break;
            case "--double-prev":
                if (i > 0) buf.push(arr[i-1]);
                break;
            default:
                buf.push(arr[i]);
        }
    }
    return buf;
};
