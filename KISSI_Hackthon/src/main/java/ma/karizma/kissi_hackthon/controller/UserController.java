package ma.karizma.kissi_hackthon.controller;

import ma.karizma.kissi_hackthon.model.Recette;
import ma.karizma.kissi_hackthon.model.User;
import ma.karizma.kissi_hackthon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody final User user){

        final User loggedUser = userService.login(user.getLogin(),user.getPassword());
        if(loggedUser==null)
        {
            return new ResponseEntity("User not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(loggedUser, HttpStatus.CREATED);
    }
}
