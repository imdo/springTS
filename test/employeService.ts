import {Service} from "../decorators/Service";
@Service
export class EmployeService{
    salaryYear(MonthSalary:number):number{
        return MonthSalary*12;
    }
}
