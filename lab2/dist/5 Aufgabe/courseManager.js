"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`Курс "${course.courseName}" додано.`);
    }
    removeCourse(courseName) {
        const index = this.courses.findIndex(course => course.courseName === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс "${courseName}" видалено.`);
        }
        else {
            console.log(`Курс "${courseName}" не знайдено.`);
        }
    }
    findCourse(courseName) {
        return this.courses.find(course => course.courseName === courseName);
    }
    listCourses() {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.courseName}, Тривалість: ${course.duration} годин, Студенти: ${course.students.join(', ') || 'Немає студентів'}`);
        });
    }
}
exports.CourseManager = CourseManager;
