package backEnd.moviesSeriesMusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesSeriesMusicApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesSeriesMusicApplication.class, args);
	}
}
