package fu.se.chapter15api.controllers;

import fu.se.chapter15api.pojos.OrchidCategory;
import fu.se.chapter15api.services.IOrchidCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class OrchidCategoryController {

    private final IOrchidCategoryService service;

    public OrchidCategoryController(IOrchidCategoryService service) {
        this.service = service;
    }

    @GetMapping({"", "/"})
    public ResponseEntity<List<OrchidCategory>> fetchAll() {
        return ResponseEntity.ok(service.getAllCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrchidCategory> getById(@PathVariable("id") int id) {
        return service.getCategoryById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
