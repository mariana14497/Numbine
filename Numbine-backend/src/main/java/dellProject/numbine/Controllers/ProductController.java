package dellProject.numbine.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dellProject.numbine.BL.ProductBL;
import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.beans.User;


@RestController
@RequestMapping("Product")
public class ProductController {
	@Autowired
	ProductBL productBL;
	@GetMapping("addProduct")
	public boolean addProduct(String name, boolean status )
	{
		Product p=new Product();
		p.setProductName(name);
		p.setStatus(status);
		
		return productBL.addProduct(p);		
	}
	
	
	@GetMapping("getAllProducts")
	public List<Product> getAllProducts(){
		return productBL.getAllProducts();
	}
	
	@GetMapping("updateProduct")
	public void updateProduct(int productId,String name,boolean status) {
		productBL.updateProduct(productId, name, status);
	}
	
	@GetMapping("deleteProduct")
	public void deleteProduct(int productId) {
		productBL.deleteProduct(productId);
	}

	@GetMapping("getAllReleases")
	public List<Release> getAllReleases(int productId){
		return productBL.getAllReleases(productId);
	}
	
	@GetMapping("getAllUsers")
	public List<User> getAllUsers(int productId){
		return productBL.getAllUsers(productId);
	}
	
	@GetMapping("getAllUsersNotInProduct")
	public List<User> getAllUsersNotInProduct(int productId){
		return productBL.getAllUsersNotInProduct(productId);
	}
	@GetMapping("updateProductUserList")
	public boolean updateProductUserList(int productId,List<User> users){
		return productBL.updateProductUserList(productId, users);
	}


 
	
}
