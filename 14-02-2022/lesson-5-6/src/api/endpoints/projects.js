import {ENDPOINT} from "../constants";


export const projectsApi = {
  get: async ()=> {
    const response = await fetch(ENDPOINT+'/projects')
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  },
  getCount: ()=> {},
  getById: ()=> {},
  create: async (data)=> {
    const response = await fetch(ENDPOINT+'/projects', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  },
  update: ()=> {},
  delete: ()=> {},
}
