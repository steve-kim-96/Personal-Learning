package com.events.relationshippractice.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/student")
public class StudentController {
    @Autowired
    StudentRepository studentRepository;

    @GetMapping
    List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    Student newStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }
}
