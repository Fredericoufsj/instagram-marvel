package com.supersim.apisimples.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supersim.apisimples.entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {

}
