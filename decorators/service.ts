import {Services} from "../box/box";
function Service(target:any){
    let className = target.name;
    Services.push({Constructor:target,className:className});
}
export { Service };