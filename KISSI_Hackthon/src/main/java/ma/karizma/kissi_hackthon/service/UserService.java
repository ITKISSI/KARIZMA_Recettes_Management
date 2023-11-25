package ma.karizma.kissi_hackthon.service;

import ma.karizma.kissi_hackthon.model.User;
import ma.karizma.kissi_hackthon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepository;

    public User get(Long isbn) {
        return userRepository.findById(isbn).get();
    }

    public User login (String login , String password){

        if(userRepository.findByLogin(login).isEmpty()){
            return null;
        }
        else if (userRepository.findByLogin(login).isPresent()){
            User user =userRepository.findByLogin(login).get();

            if(user.getPassword().equals(password) && user.getPassword().equals(login)){
                return user;
            }
            else {
                return null;
            }
        }
        return null;
    }
}