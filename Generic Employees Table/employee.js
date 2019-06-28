class Employee{
    constructor(name,age,profile,salary){
        this.name=name;
        this.age=age;
        this.profile=profile;
        this.salary=salary;
    }
    addTable(){
        let newRow=document.createElement("tr");

        let nameColumn=document.createElement("td");
        let ageColumn=document.createElement("td");
        let profileColumn=document.createElement("td");
        let salaryColumn=document.createElement("td");

        let nameT=document.createTextNode(this.name);
        let ageT=document.createTextNode(this.age);
        let profileT=document.createTextNode(this.profile);
        let salaryT=document.createTextNode(this.salary);

        nameColumn.appendChild(nameT);
        ageColumn.appendChild(ageT);
        profileColumn.appendChild(profileT);
        salaryColumn.appendChild(salaryT);

        newRow.appendChild(nameColumn);
        newRow.appendChild(ageColumn);
        newRow.appendChild(profileColumn);
        newRow.appendChild(salaryColumn);

        let tableVar=document.querySelector('#myTable')
        tableVar.appendChild(newRow);

    }

}
let newRecord1=new Employee('Prerna',19,'Web Developer',99000);
newRecord1.addTable();
let newRecord2=new Employee('Sanjana',19,'Web Developer',99000);
newRecord2.addTable();
let newRecord4=new Employee('Dad',19,'Web Developer',99000);
newRecord4.addTable();
let newRecord5=new Employee('Mom',19,'Web Developer',99000);
newRecord5.addTable();

let buttonVar=document.querySelector('#button1');
buttonVar.addEventListener('click',function(){
    let defaultRecord=new Employee('Default',0,'Default',0);
defaultRecord.addTable();


});
