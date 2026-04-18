export interface Product {
  id: number;          
  name: string;      
  price: number;       
  description: string; 
  category: 'Burger' | 'Side' | 'Drink'; 
  image: string;       // urli kuvaa varten
  isVegan: boolean;    
}