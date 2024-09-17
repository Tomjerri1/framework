"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
class OnlineCourse {
    constructor(courseName, duration) {
        this.students = [];
        this.courseName = courseName;
        this.duration = duration;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} успішно зареєстрований на курс "${this.courseName}".`);
        }
        else {
            console.log(`${student} вже зареєстрований на курс "${this.courseName}".`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
exports.OnlineCourse = OnlineCourse;
