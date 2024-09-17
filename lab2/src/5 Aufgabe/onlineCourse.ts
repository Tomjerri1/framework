import { Course } from './course';

export class OnlineCourse implements Course {
    courseName: string;
    duration: number;
    students: string[] = [];

    constructor(courseName: string, duration: number) {
        this.courseName = courseName;
        this.duration = duration;
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} успішно зареєстрований на курс "${this.courseName}".`);
        } else {
            console.log(`${student} вже зареєстрований на курс "${this.courseName}".`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}
