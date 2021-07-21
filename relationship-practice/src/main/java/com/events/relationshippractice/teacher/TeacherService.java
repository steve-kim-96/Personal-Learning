package com.events.relationshippractice.teacher;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TeacherService {
    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> getTeachers() {
        return teacherRepository.findAll();
    }

    public Teacher createTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }
}
