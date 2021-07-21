package com.events.relationshippractice.teacher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/teacher")
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    @GetMapping
    List<Teacher> getTeachers() {
        return teacherService.getTeachers();
    }

    @PostMapping
    Teacher createTeacher(@RequestBody Teacher teacher) {
        return teacherService.createTeacher(teacher);
    }
}
