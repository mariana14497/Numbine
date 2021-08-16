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
@Table(name = "Parameters")
public class Parameter {
	@Id
	@GeneratedValue
	@Column(name = "parameter_id")
	private int id;

	@Column(name = "parameter_name")
	private String parameterName;

	private boolean status;
	private String description;
	
	 @ManyToMany(fetch = FetchType.LAZY,cascade =CascadeType.ALL )
	 @JoinTable(
		        name = "Product_Parameter", 
		        joinColumns = { @JoinColumn(name = "product_id") }, 
		        inverseJoinColumns = { @JoinColumn(name = "parameter_id") }
		    )
	 private List<Product> products;
	 
	 @ManyToMany(fetch = FetchType.LAZY,cascade =CascadeType.ALL )
	 @JoinTable(
		        name = "Value_Parameter", 
		        joinColumns = { @JoinColumn(name = "Value_id") }, 
		        inverseJoinColumns = { @JoinColumn(name = "parameter_id") }
		    )
	 private List<Value> values;

	public Parameter(int id, String parameterName, boolean status, String description, List<Product> products,
			List<Value> values) {
		super();
		this.id = id;
		this.parameterName = parameterName;
		this.status = true;
		this.description = description;
		this.products = products;
		this.values = values;
	}

	public Parameter() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getParameterName() {
		return parameterName;
	}

	public void setParameterName(String parameterName) {
		this.parameterName = parameterName;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public List<Value> getValues() {
		return values;
	}

	public void setValues(List<Value> values) {
		this.values = values;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + ((parameterName == null) ? 0 : parameterName.hashCode());
		result = prime * result + ((products == null) ? 0 : products.hashCode());
		result = prime * result + (status ? 1231 : 1237);
		result = prime * result + ((values == null) ? 0 : values.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Parameter other = (Parameter) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (parameterName == null) {
			if (other.parameterName != null)
				return false;
		} else if (!parameterName.equals(other.parameterName))
			return false;
		if (products == null) {
			if (other.products != null)
				return false;
		} else if (!products.equals(other.products))
			return false;
		if (status != other.status)
			return false;
		if (values == null) {
			if (other.values != null)
				return false;
		} else if (!values.equals(other.values))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Parameter [id=" + id + ", parameterName=" + parameterName + ", status=" + status + ", description="
				+ description + ", products=" + products + ", values=" + values + "]";
	}
	
	 
}
