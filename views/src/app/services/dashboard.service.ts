import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {


    constructor(private httpclient: HttpClient) { }

    getCodewordSet() {
        return this.httpclient.get("http://localhost:3000/codeword/getcodewordset", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCodewordsList() {
        return this.httpclient.get("http://localhost:3000/codeword/getCourseList", {
            // CodeWordSetKey: data
        //   } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }


    CreateCourse() {}

    handleFileUpload() {}

    getStartDate() {}

    loadCourseModel() {}

    fetchCourseList() {}

    getCourseName() {}

    deleteCourseKey() {}

    


}