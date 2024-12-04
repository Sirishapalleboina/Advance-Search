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
}
