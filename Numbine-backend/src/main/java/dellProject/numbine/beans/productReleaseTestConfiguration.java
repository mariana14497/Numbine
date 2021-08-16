package dellProject.numbine.beans;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="product_release_test_configuration")
public class productReleaseTestConfiguration {
	
	
    
    
    
    //
    @ManyToOne
    @JoinColumn(name = "release_id")
    private Release release;

    @ManyToOne
    @JoinColumn(name = "test_configuration_id")
   private testConfiguration testConfigurations;

    //
    private Date startDate;
    private Date endDate;
     
    

}
