package dellProject.numbine.beans;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Releases")
public class Release {
	@Id
	@GeneratedValue
	@Column(name = "release_id")
	private int id;

	@Column(name = "release_name")
	private String releaseName;

	private boolean status;
	private String version;
	@Column(name = "release_date")
	private Date releaseDate;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "product_id")
	private Product product;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Release_Parameter", joinColumns = { @JoinColumn(name = "release_id") }, inverseJoinColumns = {
			@JoinColumn(name = "parameter_id") })
	private List<Parameter> parameters;

	public Release() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getReleaseName() {
		return releaseName;
	}

	public void setReleaseName(String releaseName) {
		this.releaseName = releaseName;
	}

	public List<Parameter> getParameters() {
		return parameters;
	}

	public void setParameters(List<Parameter> parameters) {
		this.parameters = parameters;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the status
	 */
	public boolean isStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(boolean status) {
		this.status = status;
	}

	/**
	 * @return the version
	 */
	public String getVersion() {
		return version;
	}

	/**
	 * @param version the version to set
	 */
	public void setVersion(String version) {
		this.version = version;
	}

	/**
	 * @return the releaseDate
	 */
	public Date getReleaseDate() {
		return releaseDate;
	}

	/**
	 * @param releaseDate the releaseDate to set
	 */
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	/**
	 * @return the product
	 */
	public Product getProduct() {
		return product;
	}

	/**
	 * @param product the product to set
	 */
	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Release [id=" + id + ", releaseName=" + releaseName + ", status=" + status + ", version=" + version
				+ ", releaseDate=" + releaseDate + ", product=" + product + ", parameters=" + parameters + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, parameters, product, releaseDate, releaseName, status, version);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Release other = (Release) obj;
		return id == other.id && Objects.equals(parameters, other.parameters) && Objects.equals(product, other.product)
				&& Objects.equals(releaseDate, other.releaseDate) && Objects.equals(releaseName, other.releaseName)
				&& status == other.status && Objects.equals(version, other.version);
	}

}
