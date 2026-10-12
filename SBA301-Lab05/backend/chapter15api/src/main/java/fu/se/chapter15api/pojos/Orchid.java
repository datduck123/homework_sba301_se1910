package fu.se.chapter15api.pojos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "Orchids")
public class Orchid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orchid_id")
    private Integer orchidId;

    @Column(name = "orchid_name", nullable = false, length = 150)
    private String orchidName;

    @Column(name = "is_natural")
    @JsonProperty("isNatural")
    private boolean isNatural;

    @Column(name = "orchid_description", length = 1000)
    private String orchidDescription;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    @JsonProperty("category")
    private OrchidCategory category;

    @Column(name = "is_attractive")
    @JsonProperty("isAttractive")
    private boolean isAttractive;

    @Column(name = "orchid_url", length = 2048)
    private String orchidURL;

    public Orchid() {}

    public Orchid(String orchidName, boolean isNatural, String orchidDescription,
                  OrchidCategory category, boolean isAttractive, String orchidURL) {
        this.orchidName = orchidName;
        this.isNatural = isNatural;
        this.orchidDescription = orchidDescription;
        this.category = category;
        this.isAttractive = isAttractive;
        this.orchidURL = orchidURL;
    }

    public Integer getOrchidId() {
        return orchidId;
    }

    public void setOrchidId(Integer orchidId) {
        this.orchidId = orchidId;
    }

    public String getOrchidName() {
        return orchidName;
    }

    public void setOrchidName(String orchidName) {
        this.orchidName = orchidName;
    }

    public boolean isNatural() {
        return isNatural;
    }

    public void setNatural(boolean natural) {
        isNatural = natural;
    }

    public String getOrchidDescription() {
        return orchidDescription;
    }

    public void setOrchidDescription(String orchidDescription) {
        this.orchidDescription = orchidDescription;
    }

    public OrchidCategory getCategory() {
        return category;
    }

    public void setCategory(OrchidCategory category) {
        this.category = category;
    }

    public boolean isAttractive() {
        return isAttractive;
    }

    public void setAttractive(boolean attractive) {
        isAttractive = attractive;
    }

    public String getOrchidURL() {
        return orchidURL;
    }

    public void setOrchidURL(String orchidURL) {
        this.orchidURL = orchidURL;
    }
}
