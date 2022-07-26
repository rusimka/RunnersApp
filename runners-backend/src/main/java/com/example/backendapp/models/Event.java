package com.example.backendapp.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.nio.file.Path;
import java.sql.Blob;
import java.util.Date;

@Entity
@Table(name = "events")
@Getter
@Setter
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long eventId;

    @Column(name = "event_name")
    private String eventName;

    @Column(name = "event_photo_name")
    private String eventPhotoName;

    @Column(name = "event_description")
    private String eventDescription;

    @Column(name = "event_city")
    private String eventCity;

    @Column(name = "event_country")
    private String eventCountry;

    @Column(name = "event_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date eventDate;

    @Column(name = "event_registration_link")
    private String eventRegistrationLink;

}