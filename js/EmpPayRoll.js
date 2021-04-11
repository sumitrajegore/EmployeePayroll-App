// class EmployeePayrollData {
//     //properties
//     id;
//     salary;

//     //constructors
//     constructor(id, name, salary) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }

//     //getter and setter methods
//     get name() { return this._name; }
//     set name(name) {
//         console.log("setting : " + name);
//         this._name = name;
//     }

//     //toString method
//     toString() {
//         return "id=" + this.id + " : name=" + this.name + " : salary=" + this.salary;
//     }
// }

// let employeePayrollData = new EmployeePayrollData(1, "Mark", 3000);
// process.stdout.write(employeePayrollData.toString() + "\n");
// employeePayrollData.name = "Jon";
// process.stdout.write(employeePayrollData.toString());
//-----------------------------------------------------------------------------------------------------------
class EmployeePayrollData{
    //properties
    id;
    salary;
    gender;
    startDate;

    //constructors
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter methods
    get name() {return this._name;}
    set name(name) { this._name = name;
    }
    //toString method
    toString(){
        const options={ year: 'numeric', month: 'long', day:'numeric' };
        const empDate=this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+" : name="+this.name+" : salary="+this.salary+
                " : gender="+this.gender+" : Start Date=" +empDate;
    }
}

// let employeePayrollData=new EmployeePayrollData(1, "Mark" , 3000 , "F" , new Date());
// process.stdout.write(employeePayrollData.toString()+"\n");
//---------------------------------------------------------------------------------------------------------------
// class EmployeePayrollData{
//     //properties
//     id;
//     salary;
//     gender;
//     startDate;
//     email;
//     pin;

//     //constructors
//     constructor(...params){
//         this.id=params[0];
//         this.name=params[1];
//         this.salary=params[2];
//         this.gender=params[3];
//         this.startDate=params[4];
//         this.email=params[5];
//         this.pin=params[6];
//     }

//     //getter and setter methods
//     get name() {return this._name;}
//     set name(name) {
//         let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
//         if(nameRegex.test(name)) this._name = name;
//         else throw 'Name is incorrect';
//     }
//     set id(id){
//         let idRegex = RegExp('^[1-9][0-9]*$');
//         if(idRegex.test(id)) this._id = id;
//         else throw 'ID is incorrect';
//     }
//     set gender(gender){
//         let genderRegex = RegExp("^[MF]$");
//         if(genderRegex.test(gender)) this._gender = gender;
//         else throw "Gender is incorrect";
//     }
//     set startDate(startDate){
//         let startDateCompare = dates.compare(startDate, new Date());
//         if(startDateCompare<= 0) this._startDate = startDate;
//         else throw 'Start Date is incorrect';
//     }
//     set email(email){
//         let emailRegex = RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$");
//         if(emailRegex.test(email)) this._email = email;
//         else throw 'email is incorrect';
//     }
//     set pin(pin){
//         let pinRegex = RegExp('^[0-9]{3,}[]{1}[0-9]{3,}*$');
//         if(pinRegex.test(pin)) this._pin = pin;
//         else throw 'pin is incorrect';
//     }

//     //toString method
//     toString(){
//         const options={year:'numeric', month:'long', day:'numeric'};
//         const empDate=this.startDate==undefined ? "undefined" :
//                         this.startDate.toLocaleDateString("en-US", options);
//         return "id="+this.id+" : name="+this.name+" : salary="+this.salary+
//                 " : gender="+this.gender+" : Start Date="+empDate+" : email="+this.email+ " : pincode="+this.pin;
//     }
// }

// let employeePayrollData=new EmployeePayrollData(1,"Mark",3000);
// process.stdout.write(employeePayrollData.toString()+"\n");
// try{
//     employeePayrollData.name="Jonn";
//     process.stdout.write(employeePayrollData.toString()+"\n");
// }catch(exception){
//     console.error(exception);
// }

// try{
//     let employeePayrollData2=new EmployeePayrollData(1,"Terrisa",30000,"F",new Date(),"sumit@gmail.com", '421651');
//     process.stdout.write(employeePayrollData2.toString()+"\n");
// }catch(exception){
//     console.error(exception);
// }

// try{
//     let employeePayrollData3=new EmployeePayrollData(2,"Terrisa",30000,"F",new Date(),"suraj.raje@co.bl.in",234567);
//     process.stdout.write(employeePayrollData3.toString()+"\n");
// }catch(exception){
//     console.error(exception);
// }

// try{
//     let employeePayrollData4=new EmployeePayrollData(3,"Terrisa",30000,"X",new Date(),"virat123@co.in",657849);
//     process.stdout.write(employeePayrollData4.toString()+"\n");
// }catch(exception){
//     console.error(exception);
// }

// try{
//     let employeePayrollData5=new EmployeePayrollData(4,"Terrisa",30000,"F",new Date(2018,6,26),"amit@gmail.com",456789);
//     process.stdout.write(employeePayrollData5.toString()+"\n");
// }catch(exception){
//     console.error(exception);
// }


