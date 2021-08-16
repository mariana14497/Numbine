package dellProject.numbine.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="values")
public class Value {
	
	@Id
	@GeneratedValue
	@Column(name="value_id")
	private int id;
	
}
