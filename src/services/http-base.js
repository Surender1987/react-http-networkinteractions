export class HttpBase {
   static config = { baseUrl: '' };

  // A static setup method replaces the constructor
  static initialize(options) {
    this.config.baseUrl = options.baseUrl;
  }

  static async get(uri) {
    try{
      console.log(`${ this.config.baseUrl }${uri}`);
      const response = await fetch(`${ this.config.baseUrl}${uri}`);
      console.log(response);
      if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }    
      return await response.json();
    } catch {
      console.log("Failed to fetch data.")
      throw new Error("Failed to fetch data..");
    }
  }
}