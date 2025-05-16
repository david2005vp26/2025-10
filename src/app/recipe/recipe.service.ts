import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingrediente {
  nombre: string;
  cantidad: string;
  unidad: string;
}

export interface Receta {
  id: number;
  nombre: string;
  porciones: number;
  descripcion: string;
  ingredientes: Ingrediente[];
  pasos: string[];
  tiempo_minutos: number;
  dificultad: string;
  tipo: string;
  etiquetas: string[];
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // URL base de los datos
  private baseListUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';
  private baseDetailUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  constructor(private http: HttpClient) { }

  // Obtiene todas las recetas
   
  getAllRecipes(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.baseListUrl);
  }

  /**
   * Obtiene el detalle de una receta por id
   * @param id ID de la receta
   */
  getRecipeDetail(id: number): Observable<Receta> {
    const url = `${this.baseDetailUrl}/${id}/recipe.json`;
    return this.http.get<Receta>(url);
  }
}
