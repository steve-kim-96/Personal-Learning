package com.events.relationshippractice.subject;

import com.events.relationshippractice.student.Student;
import com.events.relationshippractice.student.StudentRepository;
import com.events.relationshippractice.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectService {
    private final SubjectRepository subjectRepository;
    private final StudentRepository studentRepository;

    @Autowired
    public SubjectService(SubjectRepository subjectRepository, StudentRepository studentRepository) {
        this.subjectRepository = subjectRepository;
        this.studentRepository = studentRepository;
    }

    public List<Subject> getSubjects() {
        return subjectRepository.findAll();
    }

    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    public Subject enrollStudentToSubject(Long subjectId, Long studentId) {
        Subject subject = subjectRepository.getById(subjectId);
        Student student = studentRepository.getById(studentId);
        subject.enrollStudent(student);
        return subjectRepository.save(subject);
    }
}
