import { OnlineCourse } from './onlineCourse';
import { CourseManager } from './courseManager';

const courseManager = new CourseManager();

const jsCourse = new OnlineCourse('JavaScript', 40);
const tsCourse = new OnlineCourse('TypeScript', 30);

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