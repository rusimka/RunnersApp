package com.example.backendapp.services.impl;

import com.example.backendapp.models.Event;
import com.example.backendapp.repository.EventRepository;
import com.example.backendapp.services.EventService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Event saveEvent(Event event,MultipartFile eventPhoto) throws IOException, SQLException {
        Event newEvent = new Event();
        newEvent.setEventName(event.getEventName());
        String folderWithPhotos = "C:\\Users\\Rusinka\\Desktop\\RunnersApp\\runners-backend\\src\\main\\resources\\images\\";
        byte[] bytes = eventPhoto.getBytes();
        Path path = Paths.get(folderWithPhotos + eventPhoto.getOriginalFilename());
        Files.write(path,bytes);
        newEvent.setEventPhotoName(eventPhoto.getOriginalFilename());
        newEvent.setEventDescription(event.getEventDescription());
        newEvent.setEventCity(event.getEventCity());
        newEvent.setEventCountry(event.getEventCountry());
        newEvent.setEventDate(event.getEventDate());
        newEvent.setEventRegistrationLink(event.getEventRegistrationLink());
        return eventRepository.save(newEvent);
    }

}
