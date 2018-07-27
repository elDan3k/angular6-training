package pl.training.books.dto;

import lombok.Data;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "book")
@Data
public class BookDto {

    private Long id;
    private String title;
    private String authors;
    private String category;
    private boolean favourite;
    private int rating;
    private GenreDto genre;
    private String supportEmail;

}
