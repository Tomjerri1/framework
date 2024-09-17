import { Course } from './course';

export class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс "${course.courseName}" додано.`);
    }

    removeCourse(courseName: string): void {
        const index = this.courses.findIndex(course => course.courseName === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс "${courseName}" видалено.`);
        } else {
            console.log(`Курс "${courseName}" не знайдено.`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.courseName === courseName);
    }

    listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.courseName}, Тривалість: ${course.duration} годин, Студенти: ${course.students.join(', ') || 'Немає студентів'}`);
        });
    }
}
