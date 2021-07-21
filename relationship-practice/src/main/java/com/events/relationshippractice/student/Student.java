package com.events.relationshippractice.student;

import com.events.relationshippractice.subject.Subject;
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
public class Student {
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

    @ManyToMany(mappedBy = "enrolledStudents")
    private Set<Subject> enrolledSubjects = new HashSet<>();

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
