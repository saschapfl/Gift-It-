package com.giftit.giftit;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {
    @Id
    @Column(name="username")
    private String username;

    @ManyToOne(fetch = FetchType.LAZY)
    private Room room;

}
