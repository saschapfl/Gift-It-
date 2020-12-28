package com.giftit.giftit;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Owner{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "idowner", updatable = false, nullable = false)
    private int idowner;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @OneToOne(mappedBy = "owner")
    private Room room;
}
