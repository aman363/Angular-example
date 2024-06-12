export class AssessmentScore{
    id:number
    assessmentNo:number
    assessmentDate:Date
    assessmentTime:string
    constructor(id:number,assessmentNo:number,assessmentDate:Date,assessmentTime:string){
        this.id=id
        this.assessmentNo=assessmentNo
        this.assessmentDate=assessmentDate
        this.assessmentTime=assessmentTime
    }
}