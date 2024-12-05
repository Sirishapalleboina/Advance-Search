import { Component, OnInit } from '@angular/core';
import { RecordServiceService } from '../service/record-service.service'; // Adjust the path as necessary



@Component({
  selector: 'app-record-search',
  templateUrl: './record-search.component.html',
  styleUrls: ['./record-search.component.css'] // Optional for styling
})
export class RecordSearchComponent implements OnInit {
  records: any[] = []; // List to store fetched records
  startDate: any; // Start date for search
  endDate: any; // End date for search
  sortField: string = 'date'; // Default sort field
  sortOrder: string = 'desc'; // Default sort order

  constructor(private recordService: RecordServiceService) { }

  ngOnInit(): void { }

  searchRecords(): void {
    this.recordService.searchRecords(this.startDate, this.endDate, this.sortField, this.sortOrder)
      .subscribe((data:any) => {
        this.records = data; // Update records list with fetched data
      });
  }

  students = [
    { name: 'John Doe', age: 20, grade: 'A', enrollmentDate: new Date('2022-09-01') },
    { name: 'Jane Smith', age: 22, grade: 'B+', enrollmentDate: new Date('2021-08-15') },
    { name: 'Sam Wilson', age: 19, grade: 'A-', enrollmentDate: new Date('2023-01-10') },
    { name: 'Anna Taylor', age: 21, grade: 'B', enrollmentDate: new Date('2020-06-20') },
    { name: 'Tom Green', age: 23, grade: 'C+', enrollmentDate: new Date('2022-12-05') }
  ];
}
