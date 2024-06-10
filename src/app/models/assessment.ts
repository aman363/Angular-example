export class Assessment{
    id:number
    assessmentName:string
    assessmentTotalMarks:number
    img_path:string
    constructor(id:number,assessmentName:string,assessmentTotalMarks:number,img_path:string){
        this.id=id
        this.assessmentName=assessmentName
        this.assessmentTotalMarks=assessmentTotalMarks
        this.img_path=img_path
    }
}