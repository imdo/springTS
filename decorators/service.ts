import {Services} from "../box/box";
function Service(target:any){
    let className = target.name;
    console.log(className);
    Services.push({Constructor:target,className:className});
}
export { Service };