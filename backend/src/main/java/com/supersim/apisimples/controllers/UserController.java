package com.supersim.apisimples.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supersim.apisimples.entities.Users;
import com.supersim.apisimples.repositories.UserRepository;

@RestController
@RequestMapping(value = "/")
public class UserController {

	@Autowired
	UserRepository repository;
	
	@GetMapping
	public List<Users> getAll(){
		return repository.findAll();
	}
}
