import { Service } from "../";
@Service
class PersonService{
    public name:string;
    sayName(){
        return "name";
    }
}
export { PersonService };