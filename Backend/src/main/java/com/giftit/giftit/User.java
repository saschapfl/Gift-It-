package com.giftit.giftit;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name="iduser")
    private int iduser;

    @Column(name="username")
    public String username;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    public Room room;

}
