package fu.se.chapter15api.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "orchid_categories")
public class OrchidCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    @JsonProperty("categoryId")
    private Integer categoryId;

    @Column(name = "category_name", nullable = false, unique = true, length = 100)
    @JsonProperty("categoryName")
    private String categoryName;

    @Column(name = "description", length = 500)
    @JsonProperty("description")
    private String description;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Orchid> orchids;

    public OrchidCategory() {}

    public OrchidCategory(String categoryName, String description) {
        this.categoryName = categoryName;
        this.description = description;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JsonIgnore
    public Set<Orchid> getOrchids() {
        return orchids;
    }

    public void setOrchids(Set<Orchid> orchids) {
        this.orchids = orchids;
    }
}
