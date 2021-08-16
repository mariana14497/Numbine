package dellProject.numbine.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import dellProject.numbine.BL.ReleaseBL;
import dellProject.numbine.beans.Release;
@RestController
@RequestMapping("Release")
public class ReleaseControllers {

	@Autowired
	ReleaseBL ReleaseBL;
	
	@GetMapping("getAllReleases")
	public List<Release>  getAllReleases(int productId )
	{
		return ReleaseBL.getAllReleases(productId);
	}
	
	@GetMapping("updateRelease")
	public boolean updateRelease(int productId, String releaseName, String version, boolean status) 
	{
		return ReleaseBL.updateRelease(productId, releaseName, version, status);
	}
	@GetMapping("addNewRelease")
	public boolean addNewRelease(int productId, String releaseName, String version, boolean status) {
		return ReleaseBL.addNewRelease(productId, releaseName, version, status);
	}
	
	
}
