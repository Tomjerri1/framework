"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onlineCourse_1 = require("./onlineCourse");
const courseManager_1 = require("./courseManager");
const courseManager = new courseManager_1.CourseManager();
const jsCourse = new onlineCourse_1.OnlineCourse('JavaScript', 40);
const tsCourse = new onlineCourse_1.OnlineCourse('TypeScript', 30);
console.log('\n');
courseManager.addCourse(jsCourse);
courseManager.addCourse(tsCourse);
console.log('\n');
jsCourse.registerStudent('Москалюк');
jsCourse.registerStudent('Чоботар');
tsCourse.registerStudent('Пінгвін');
console.log('\n');
courseManager.listCourses();
console.log('\n');
courseManager.removeCourse('JavaScript');
console.log('\n');
courseManager.listCourses();
