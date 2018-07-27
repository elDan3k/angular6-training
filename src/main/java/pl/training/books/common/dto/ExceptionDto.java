package pl.training.books.common.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "exception")
@AllArgsConstructor
@Data
public class ExceptionDto {

    private String description;

}
