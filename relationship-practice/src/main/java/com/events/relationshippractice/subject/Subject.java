package com.events.relationshippractice.subject;

import com.events.relationshippractice.student.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Subject {
    @Id
    @GeneratedValue
    @Column(
            name = "id",
            nullable = false,
            updatable = false
    )
    private Long id;
    @Column(
            name = "name",
            nullable = false
    )
    private String name;

    @ManyToMany
    @JoinTable(
            name = "enrolled_students",
            joinColumns = @JoinColumn(name = "subject_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private Set<Student> enrolledStudents = new HashSet<>();

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
