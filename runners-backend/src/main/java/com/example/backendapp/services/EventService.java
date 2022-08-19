package com.example.backendapp.services;

import com.example.backendapp.models.Event;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface EventService {

    Event saveEvent(Event event);

    List<Event> getAllEvents();

}
