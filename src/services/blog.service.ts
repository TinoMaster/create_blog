interface ISaveImageRes {
  success?: boolean;
  error?: string;
  location?: string;
}

interface IBlogClass {
  baseUrl: string;
  saveImage(image: File): Promise<ISaveImageRes>;
}

class Blog implements IBlogClass {
  constructor(public baseUrl: string) {}

  async saveImage(image: File) {
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(`${this.baseUrl}/image`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  }
}

export const blogService = new Blog("http://localhost:5000/api/v1/blogs");
