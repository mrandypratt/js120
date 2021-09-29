function createStudent (name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse(course) {
      course.note = [];
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note.push(note);
        }
      });
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = [note];
        }
      });
    },

    viewNotes() {
      let notes = [];
      this.courses.forEach(course => {
        if (course.note[0]) notes.push(`${course.name}: ${course.note.join("; ")}`);
      });
      notes.forEach(note => console.log(note));
    },
  };
}

let school = {
  addStudent() {
    
  },

  enrollStudent() {

  },

  addGrade() {

  },
  
  getReportCard() {

  },

  courseReport() {

  },
};

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo = createStudent("foo", "3rd");
foo.addCourse("Math");
foo

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');