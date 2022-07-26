package com.example.backendapp.services;

import com.example.backendapp.models.Event;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;

public interface EventService {

    Event saveEvent(Event event,MultipartFile eventPhoto) throws IOException, SQLException;
}
