package fu.se.chapter15api.services;

import fu.se.chapter15api.pojos.OrchidCategory;
import fu.se.chapter15api.repositories.IOrchidCategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrchidCategoryService implements IOrchidCategoryService {

    private final IOrchidCategoryRepository repository;

    public OrchidCategoryService(IOrchidCategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrchidCategory> getAllCategories() {
        List<OrchidCategory> categories = repository.findAll();
        System.out.println("Fetched " + categories.size() + " categories from database");
        for (OrchidCategory cat : categories) {
            System.out.println("Category: " + cat.getCategoryId() + " - " + cat.getCategoryName());
        }
        return categories;
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<OrchidCategory> getCategoryById(int categoryId) {
        return repository.findById(categoryId);
    }
}
