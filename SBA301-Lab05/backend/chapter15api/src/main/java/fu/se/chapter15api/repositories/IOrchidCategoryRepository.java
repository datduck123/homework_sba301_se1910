package fu.se.chapter15api.repositories;

import fu.se.chapter15api.pojos.OrchidCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrchidCategoryRepository extends JpaRepository<OrchidCategory, Integer> {
}
