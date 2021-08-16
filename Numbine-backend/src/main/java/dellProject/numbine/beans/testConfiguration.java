package dellProject.numbine.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="test_configuration")
public class testConfiguration {
	@Id
	@GeneratedValue
	@Column(name="test_configuration_id")
	private int id;
	
	private String testConfigurationName;
	
	 

}
