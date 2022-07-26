package com.example.backendapp.controllers;

import com.example.backendapp.models.Event;
import com.example.backendapp.payload.response.MessageResponse;
import com.example.backendapp.services.EventService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping(value = "/add-event",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> addEvent(@ModelAttribute Event event, @RequestParam(value = "eventPhoto", required = false) MultipartFile eventPhoto) throws IOException, SQLException {
        this.eventService.saveEvent(event,eventPhoto);
        return ResponseEntity.ok(new MessageResponse("Event successfully added!"));
    }

}
