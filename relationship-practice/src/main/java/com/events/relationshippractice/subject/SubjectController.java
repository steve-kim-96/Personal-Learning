package com.events.relationshippractice.subject;

import com.events.relationshippractice.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/subject")
public class SubjectController {
    @Autowired
    SubjectRepository subjectRepository;

    @GetMapping
    List<Subject> getStudents() {
        return subjectRepository.findAll();
    }

    @PostMapping
    Subject newStudent(@RequestBody Subject subject) {
        return subjectRepository.save(subject);
    }
}
