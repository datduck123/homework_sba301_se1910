package fu.se.lab06jwt;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SecurityContractTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void usersMe_withoutToken_isUnauthorizedOrForbidden() throws Exception {
        mvc.perform(get("/users/me"))
                .andExpect(status().isForbidden()); // Spring default without EntryPoint is 403 on unauthenticated request
    }
}
