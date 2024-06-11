export class Assessment{
    id:number
    assessmentName:string
    assessmentTotalMarks:number
    img_path:string
    active:boolean
    constructor(id:number,assessmentName:string,assessmentTotalMarks:number,img_path:string,active:boolean){
        this.id=id
        this.assessmentName=assessmentName
        this.assessmentTotalMarks=assessmentTotalMarks
        this.img_path=img_path
        this.active=active
    }
}