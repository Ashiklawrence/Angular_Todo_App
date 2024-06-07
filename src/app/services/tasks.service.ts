import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  protected taskList: any = [];
  constructor() {
    this.taskList = []
  }
  getTask() {
    return this.taskList
  }
  addTask(task: string = '') {
    if (task === ''){
    
    }else{
      this.taskList.push({
        id: this.taskList.length,
        completed: false,
        task: task,
  
      })
    }
    

  }
  deleteTask(itemid :Number){
    let newList : any =[]
    newList=this.taskList.filter((obj:any)=>{
      return obj.id !== itemid
    })
    this.taskList = newList
    
  }
  updateTask(itemid :Number,newtask :string){
    this.taskList.find(itemid).push({
      id : itemid,
      completed : false,
      task : newtask
    })
  }
  viewUpdate (itemid : Number){
    console.log(itemid,'viewUpdate is Running')
    return this.taskList.filter((obj:any)=>{
      return itemid===obj.id})
  }
  changeCompleted(itemid : Number){
    this.taskList.filter((obj:any)=>{
      if(obj.id === itemid){
        return console.log({...obj,completed :obj.completed})
      }
    })
  }

}
