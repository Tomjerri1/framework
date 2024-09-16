"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
class OnlineCourse {
    constructor(name, duration) {
        this.students = [];
        this.name = name;
        this.duration = duration;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
        else {
            console.log(`Student ${student} is already registered`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
exports.OnlineCourse = OnlineCourse;
