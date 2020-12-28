package com.giftit.giftit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("/rooms")
    public @ResponseBody Room getRoom(@RequestParam(name = "id") int id){
        return roomRepository.findById(id).get();
}


    @PostMapping("/rooms")
    public  @ResponseBody Room createRoom(@RequestBody Room room){
        return roomRepository.save(room);
    }

    @PutMapping("/rooms")
    public @ResponseBody Room updateRoom(@RequestBody Room room){
        return roomRepository.save(room);
    }
}
