"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`Course ${course.name} added successfully`);
    }
    removeCourse(courseName) {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Course ${courseName} removed successfully`);
        }
        else {
            console.log(`Course ${courseName} not found`);
        }
    }
    findCourse(courseName) {
        return this.courses.find(course => course.name === courseName);
    }
    displayCourses() {
        console.table(this.courses);
    }
}
exports.CourseManager = CourseManager;
