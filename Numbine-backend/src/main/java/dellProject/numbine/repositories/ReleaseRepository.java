package dellProject.numbine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;

public interface ReleaseRepository extends JpaRepository<Release,Integer>{
	

}
