import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseService {


    constructor(private httpclient: HttpClient) { }

    getCourseStudentData(data){
        return this.httpclient.post("http://localhost:3000/codeword/getcoursestudent", {
            CourseNameValue: data
          } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCoursesData(){
        return this.httpclient.get("http://localhost:3000/codeword/getCourseList", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        }) 
    }

    deleteStudent(){ }

    editStudent() { }

    editCourse() { }






}