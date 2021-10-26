package com.devsuperior.dsvendas.dto;
import java.io.Serializable;
import com.devsuperior.dsvendas.entities.Seller;

public class SaleSuccessDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Long Visited;
	private Long deals;
	
	public SaleSuccessDTO(){
	}

	public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
		sellerName = seller.getName();
		this.Visited = visited;
		this.deals = deals;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getVisited() {
		return Visited;
	}

	public void setVisited(Long visited) {
		Visited = visited;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

}
