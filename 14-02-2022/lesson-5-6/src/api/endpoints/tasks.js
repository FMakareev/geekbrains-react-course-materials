import {ENDPOINT} from "../constants";


export const tasksApi = {
  get: async (projectId) => {
    const response = await fetch(ENDPOINT+'/tasks?project='+projectId)
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(ENDPOINT+'/tasks', {
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
  delete: async (taskId) => {
    const response = await fetch(ENDPOINT+'/tasks/' + taskId, {
      method: 'delete'
    })
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  }
}
