import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-images',
  templateUrl: './query-images.component.html',
  styleUrls: ['./query-images.component.css']
})
export class QueryImagesComponent implements OnInit {
  @Input() input: string;
  @Output() onChangeDate = new EventEmitter<Date>();
  @Output() onChangeNumberImages= new EventEmitter<number>();
  @Output() onClick= new EventEmitter<any>();

  dateNow = new Date();
  options = [
    {id: 1, name: "1"},
    {id: 10, name: "10"},
    {id: 30, name: "30"},
    {id: "all", name: "all"}
  ];
  selectedValue = this.options[1];

  constructor() { }

  public onChangeSelector(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.onChangeNumberImages.emit(newVal);
    console.log(newVal);
  }

  public onChangePicker(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.onChangeDate.emit(newVal);
    console.log(newVal);
  }

  public onClickButton(): void {  // event will give you full breif of action
    this.onChangeDate.emit(null);
    console.log("------------");
    alert();
  }

  ngOnInit() {
  }

}
