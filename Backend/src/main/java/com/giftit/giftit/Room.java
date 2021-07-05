package com.giftit.giftit;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name="room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "id", updatable = false, nullable = false)
    public int id;

    @Column(name="name")
    public String name;

    @Column(name="idea_date")
    public Date planning_date;

    @Column(name="final_date")
    public Date party_date;

    @Column(name="description")
    public String description;

    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="owner_id", referencedColumnName = "idowner")
    public Owner owner;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "id")
    public List<Beverage> beverages;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "room")
    public List<User> users;
}
