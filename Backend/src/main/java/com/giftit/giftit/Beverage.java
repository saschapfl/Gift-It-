package com.giftit.giftit;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Beverage {
    @Id
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="amount")
    private double amount;

    @Column(name="price_per_unit")
    private double price_per_unit;
}
