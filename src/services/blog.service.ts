export interface ISaveImageRes {
  success?: boolean;
  location?: string; // Opcional, dependiendo de la estructura real de la respuesta
  error?: string; // Opcional, para manejar errores
}

/* interface IBlogClass {
  baseUrl: string;
  saveImage(image: File): Promise<ISaveImageRes>;
} */

class Blog {
  constructor(private baseUrl: string) {}

  async saveImage(image: File): Promise<ISaveImageRes> {
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(`${this.baseUrl}/image`, {
      method: "POST",
      body: formData,
    });
    const data: ISaveImageRes = await res.json();
    return data;
  }
}

export const blogService = new Blog("http://localhost:5000/api/v1/blogs");
