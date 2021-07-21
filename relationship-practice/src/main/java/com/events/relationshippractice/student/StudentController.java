package com.events.relationshippractice.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping
    List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PostMapping
    Student newStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }
}
