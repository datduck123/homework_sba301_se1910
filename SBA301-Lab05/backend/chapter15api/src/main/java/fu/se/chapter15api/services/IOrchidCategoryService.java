package fu.se.chapter15api.services;

import fu.se.chapter15api.pojos.OrchidCategory;
import java.util.List;
import java.util.Optional;

public interface IOrchidCategoryService {
    List<OrchidCategory> getAllCategories();
    Optional<OrchidCategory> getCategoryById(int categoryId);
}
