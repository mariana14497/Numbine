package dellProject.numbine.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.beans.User;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	public Product findByProductName(String name);
	public void updateProduct(int productId,String name,boolean status);
	public List<Release> getAllReleases(int productId);
	public List<User> getAllUsers(int productId);
	public List<User> getAllUsersNotInProduct(int productId);
	
}
