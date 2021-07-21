package com.events.relationshippractice.subject;

import com.events.relationshippractice.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/subject")
public class SubjectController {
    private final SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }
    @GetMapping
    List<Subject> getSubjects() {
        return subjectService.getSubjects();
    }

    @PostMapping
    Subject createSubject(@RequestBody Subject subject) {
        return subjectService.createSubject(subject);
    }

    @PutMapping(path = "/{subjectId}/students/{studentId}")
    Subject enrollStudentToSubject(
            @PathVariable Long subjectId,
            @PathVariable Long studentId
    ) {
         return subjectService.enrollStudentToSubject(subjectId, studentId);

    }
}
