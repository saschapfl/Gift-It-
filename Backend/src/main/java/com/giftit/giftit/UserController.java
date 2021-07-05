package com.giftit.giftit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getUserById")
    public @ResponseBody
    User getUser(@RequestParam(name = "id") int id){
        return userRepository.findById(id).get();
    }

    @GetMapping("/getAllUsersForRoom")
    public @ResponseBody
    List<User> getUsersForRoom(@RequestParam(name = "roomid") int id){
        Iterable<User> allUsers = userRepository.findAll();
        List<User> filteredUsers = new ArrayList<User>();
        for(User user : allUsers){
            if(user.room.id != id){
                filteredUsers.add(user);
            }
        }
        return filteredUsers;
    }


    @PostMapping("/createUser")
    public  @ResponseBody User createUser(@RequestBody User user){


        return userRepository.save(user);
    }

    @PutMapping("/updateUser")
    public @ResponseBody User updateUser(@RequestBody User user){
        return userRepository.save(user);
    }
}
