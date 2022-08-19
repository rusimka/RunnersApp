package com.example.backendapp.controllers;

import com.example.backendapp.models.Event;
import com.example.backendapp.payload.response.MessageResponse;
import com.example.backendapp.services.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import static org.springframework.http.MediaType.*;
import static org.springframework.http.MediaType.MULTIPART_FORM_DATA;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping(value = "/add-event", consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addEvent(@RequestBody Event event) throws IOException, SQLException {
        this.eventService.saveEvent(event);
        return ResponseEntity.ok(new MessageResponse("Event successfully added!"));
    }

    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return this.eventService.getAllEvents();
    }
}
